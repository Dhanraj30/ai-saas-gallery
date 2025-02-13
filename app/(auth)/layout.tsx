export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col">
      {/* Navbar */}
      <nav className="w-full px-4 py-4 border-b border-gray-800">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-white">Gallery AI</div>
        </div>
      </nav>

      {/* Auth Content */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>
    </div>
  );
} 