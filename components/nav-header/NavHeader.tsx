import Link from "next/link";

const NavHeader: React.FC = () => {
  return (
    <nav className="hidden sm:flex gap-x-4 justify-between">
      <Link
        href="/"
        className="text-lightBlue2 transition duration-300 ease-in-out hover:border-b hover:border-lightBlue4 hover:text-lightBlue4 ts-1"
      >
        Home
      </Link>
      <Link
        href="/products"
        className="text-lightBlue2 transition duration-300 ease-in-out hover:border-b hover:border-lightBlue4 hover:text-lightBlue4 ts-1"
      >
        Products
      </Link>
      <Link
        href="/products"
        className="text-lightBlue2 transition duration-300 ease-in-out hover:border-b hover:border-lightBlue4 hover:text-lightBlue4 ts-1"
      >
        Daily
      </Link>
      <Link
        href="https://grupodanone.com.mx/"
        className="text-lightBlue2 transition duration-300 ease-in-out hover:border-b hover:border-lightBlue4 hover:text-lightBlue4 ts-1"
      >
        Contact
      </Link>
    </nav>
  );
};

export default NavHeader;
