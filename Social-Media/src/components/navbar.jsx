import { FaBagShopping, FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const navbarItem = [
    { name: "COMPANIONSHIP", link: "/app/companionship" },
    { name: "REVENGE", link: "/app/revenge" },
    { name: "PRODUCTIVITY", link: "/app/productivity" },
    { name: "PEACE", link: "/app/peace" },
    { name: "SLEEP", link: "/app/sleep" },
  ];

  return (
    <div className="sticky top-0 z-50 w-full border-b border-red-900 bg-black">
      <div className="flex justify-between items-center w-full px-6 py-3">
        {/* Left: Logo */}
        <Link to="/">
          <img src="/images/logo2.gif" className="w-10 h-10" alt="Logo" />
        </Link>

        {/* Right: Bag + Hamburger */}
        <div className="flex items-center gap-5">
          {/* Bag */}
          <Link to="/app/add-to-cart" className="relative">
            <FaBagShopping
              size={24}
              className="text-red-500 drop-shadow-[0_0_10px_rgba(255,0,0,0.6)] hover:text-white transition-all"
            />
            {/* optional badge for item count */}
            {/* <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">3</span> */}
          </Link>

          {/* Menu */}
          <Sheet>
            <SheetTrigger>
              <FaBars
                size={22}
                className="text-red-500 hover:text-white transition-all"
              />
            </SheetTrigger>
            <SheetContent side="right" className="bg-black text-red-500">
              <div className="flex flex-col gap-6 mt-10">
                {navbarItem.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    className="text-lg !no-underline !text-red-500 font-medium hover:text-white transition-all"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
