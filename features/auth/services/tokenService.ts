export const tokenService = {
  accessToken: "",
  setAccessToken(token: string) {
    console.log("Setting access token:", token);
    this.accessToken = token;
  },
  getAccessToken() {
    console.log("Getting access token:", this.accessToken);
    return this.accessToken;
  },
  clearAccessToken() {
    console.log("Clearing access token");
    this.accessToken = "";
  },
};
