import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";
import { tokenService } from "../services/tokenService";

const apiClient: AxiosInstance = axios.create({
  baseURL: "http://localhost:8080/api/auth",
  withCredentials: true, // Include cookies for refresh token
});

let refreshingToken: Promise<void> | null = null;

apiClient.interceptors.request.use(
  async (
    config: InternalAxiosRequestConfig
  ): Promise<InternalAxiosRequestConfig> => {
    if (config.url?.includes("/refresh")) {
      return config; // Skip adding Authorization for refresh requests
    }

    let token = tokenService.getAccessToken();
    if (!token) {
      try {
        if (!refreshingToken) {
          refreshingToken = apiClient
            .post("/refresh", {}, { withCredentials: true })
            .then((refreshResponse) => {
              const newAccessToken = refreshResponse.data.accessToken;
              tokenService.setAccessToken(newAccessToken);
            })
            .finally(() => {
              refreshingToken = null;
            });
        }
        await refreshingToken;
        token = tokenService.getAccessToken();
      } catch (error) {
        console.error("Token refresh failed. Redirecting to login.", error);
        window.location.href = "/login"; // Redirect to login on failure
        throw error;
      }
    }

    config.headers = config.headers || {};
    config.headers["Authorization"] = `Bearer ${token}`;

    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        if (!refreshingToken) {
          refreshingToken = apiClient
            .post("/refresh", {}, { withCredentials: true })
            .then((refreshResponse) => {
              const newAccessToken = refreshResponse.data.accessToken;
              tokenService.setAccessToken(newAccessToken);
            })
            .finally(() => {
              refreshingToken = null;
            });
        }

        await refreshingToken;

        originalRequest.headers[
          "Authorization"
        ] = `Bearer ${tokenService.getAccessToken()}`;
        return apiClient(originalRequest);
      } catch (refreshError) {
        console.error(
          "Token refresh failed. Redirecting to login.",
          refreshError
        );
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default apiClient;
