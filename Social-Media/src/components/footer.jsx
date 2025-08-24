import { TbNumber14Small, TbNumber100Small } from "react-icons/tb";
import { Link } from "react-router-dom";

const Footer = () => {
  const shoppingCategories =  [
    { name: "COMPANIONSHIP", link: "/companionship" },
    { name: "REVENGE", link: "/revenge" },
    { name: "PRODUCTIVITY", link: "/productivity" },
    { name: "PEACE", link: "/peace" },
    { name: "SLEEP", link: "/sleep" },
  ];

  const spookyPolicies = [
    "Summon Us (Contact Us)",
    "Frightful Questions (FAQ)",
    "Cursed Terms & Conditions",
    "Rituals of Use (Terms of Use)",
    "Track Your Haunted Delivery",
    "Phantom Shipping",
    "Banishment (Cancellations)",
    "Return from the Grave (Returns)",
    "Covenant of Privacy",
    "Grievance Rituals",
  ];

  return (
    <footer className="w-full bg-gradient-to-t from-black via-gray-950 to-red-950
 px-8 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">🕯 Haunted Bazaar</h2>
          <p className="text-sm text-white">
            © 2025 Haunted Bazaar. All rights reserved.  
            <br /> Beware of cursed deals 🩸
          </p>
        </div>

        {/* Shopping Categories */}
        <div>
          <h5 className="text-lg font-semibold !text-red-400 mb-3 !no-underline">Shop the Cursed</h5>
          <ul className="space-y-2">
            {shoppingCategories.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.link}
                  className="text-sm !no-underline !text-gray-300 hover:!text-red-500 transition-all"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Spooky Policies */}
        <div>
          <h5 className="text-lg font-semibold  !text-red-400 mb-3">Customer Covenants</h5>
          <ul className="space-y-2">
            {spookyPolicies.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="text-sm !no-underline !text-gray-300 hover:!text-red-500 transition-all"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Guarantee Icons */}
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <TbNumber14Small
              size={36}
              className="text-red-500 border border-red-600 rounded-full p-1 shadow-[0_0_10px_#ff0000]"
            />
            <p className="text-sm text-white">
              <b className="text-red-400">Return within 14 moons</b > of receiving your cursed item
            </p>
          </div>

          <div className="flex items-start gap-3">
            <TbNumber100Small
              size={36}
              className="text-red-500 border border-red-600 rounded-full p-1 shadow-[0_0_10px_#ff0000]"
            />
            <p className="text-sm  text-white">
              <b className="text-red-400">100% ORIGINAL</b> spirits guaranteed in every purchase
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
