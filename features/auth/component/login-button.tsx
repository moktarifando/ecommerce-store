import { Button } from "@/components/ui/button";
import { MdLogin } from "react-icons/md";

import { useRouter } from "next/navigation";

export default function LoginButton() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };
  return (
    <Button
      onClick={handleLogin}
      className="flex items-center space-x-2 text-blue-500 bg-white"
    >
      <MdLogin size={20} />
      <span>Login</span>
    </Button>
  );
}
