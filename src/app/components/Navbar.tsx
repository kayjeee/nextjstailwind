// components/Navbar.tsx
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <div classname="w-full h-[80px] bg-white border-b">
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <Link href="/" passHref>
              <span className="text-white text-xl font-bold cursor-pointer">Your App Name</span>
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link href="/home" passHref>
              <span className="text-white cursor-pointer">Home</span>
            </Link>
            <Link href="/feeds" passHref>
              <span className="text-white cursor-pointer">Feeds</span>
            </Link>
            {/* Add more links as needed */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
