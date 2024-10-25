import Logo from "./logo";
import { X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../route";

interface Sidebar {
  open: boolean | null;
  onClose: () => void;
}

const Sidebar = ({ open, onClose }: Sidebar) => {
  const { pathname } = useLocation();
  return (
    <div
      className={`h-screen fixed bg-bgSecondary w-[300px] top-0 z-[200] p-4  pr-0 transition-all duration-500 left-[-320px] md:left-0 ${
        open ? "left-[0px]" : ""
      }`}
    >
      <Logo />
      <div
        className="cursor-pointer absolute top-4 right-4 size-10 bg-bgprimary text-gray-500 flex items-center justify-center rounded-full hover:text-primary"
        onClick={onClose}
      >
        <X />
      </div>
      <div className="p-8">
        {routes.map((route, index) => (
          <Link
            to={route.path}
            target={route.target}
            key={index}
            className={`flex items-center gap-1 cursor-pointer px-5 py-3 rounded-[51px] rounded-tr-none rounded-br-none text-base  transition-all hover:text-white ${
              route.activePaths.includes(pathname)
                ? "bg-bgprimary text-primary"
                : "text-gray-500"
            }`}
          >
            {route.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
