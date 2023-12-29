import { NavbarItem } from "../item/item.component";
import { NavbarTitle } from "../title/title.component";

export const NavbarContainer = () => (
  <nav className="navbar">
    <div className="wrapper">
      <NavbarTitle />
      <div className="social">
        <NavbarItem link={"#"} icon={"/facebook.png"} alt="facebook icon" />
        <NavbarItem link={"#"} icon={"/instagram.png"} alt="facebook icon" />
        <NavbarItem link={"#"} icon={"/youtube.png"} alt="facebook icon" />
        <NavbarItem link={"#"} icon={"/dribbble.png"} alt="facebook icon" />
      </div>
    </div>
  </nav>
);
