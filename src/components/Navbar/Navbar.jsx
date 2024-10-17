import { Link, useLocation } from "react-router-dom";
import mainLogo from "../../assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="flex justify-between items-center py-10 px-20 max-sm:px-8 max-md:px-12 max-lg:px-16 max-xl:px-20 max-md:py-6 z-50">
    <div>
      <img src={mainLogo} alt="Golden Cloud Solution logo" />
    </div>
    <nav aria-label="Main Navigation">
      <ul className="z-50 flex space-x-20 text-[24px] max-sm:text-[12px] max-md:text-[16px] max-lg:text-[18px] max-xl:text-[24px] max-sm:space-x-8 max-md:space-x-12 max-lg:space-x-5 max-xl:space-x-20">
        <li>
          <Link to={"/"} className={pathname === "/" ? "element px-6" : "px-6 hover:text-[#ffc107] z-50"}>
            Trang Chủ
          </Link>
        </li>
        <li>
          <Link to={"/service"} className={pathname === "/service" ? "element px-6" : "px-6 hover:text-[#ffc107] z-50"}>
            Dịch Vụ
          </Link>
        </li>
        <li>
          <Link to={"/contact"} className={pathname === "/contact" ? "element px-6" : "px-6 hover:text-[#ffc107] z-50"}>
            Liên Hệ
          </Link>
        </li>
        <li>
          <Link to={"/blog"} className={pathname === "/blog" ? "element px-6" : "px-6 hover:text-[#ffc107] z-50"}>
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  </div>
  );
};

export default Navbar;
