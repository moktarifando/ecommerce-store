import { Button } from "@/components/ui/button";
import useAuthStore from "@/features/auth/store/authStore";
import { useRouter } from "next/navigation";
import { MdLogout } from "react-icons/md";

export default function LogoutButton() {
  const logout = useAuthStore((state) => state.logout);
  const router = useRouter();

  const handleLogout = async () => {
    // send post method to logout endpoint in backend
    try {
      const response = await fetch("http://localhost:8080/api/auth/logout", {
        method: "POST",
        credentials: "include", // Ensure cookies are included
      });

      if (response.ok) {
        logout(); // Update authentication global state
        router.push("/"); // Redirect to homepage
      } else {
        console.error("Logout failed");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <Button
      onClick={handleLogout}
      className="flex items-center space-x-2 text-red-500"
    >
      <MdLogout size={20} />
      <span>Logout</span>
    </Button>
  );
}
