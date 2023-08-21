import Image from "next/image";
import { LogoWhite } from "~/assets/images";

const NavBar = () => {
  return (
    <header className="bg-base-300 w-full">
      <nav className="max-w-[1440px] navbar">
        <div className="flex-1">
          <a className="btn btn-ghost">
            <Image src={LogoWhite} width={80} height={80} alt="Logo" />  
          </a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-48 md:w-auto"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
