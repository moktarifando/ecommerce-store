export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center bg-gray-100 min-h-screen relative">
      <div className="absolute top-36">{children}</div>
    </div>
  );
}
