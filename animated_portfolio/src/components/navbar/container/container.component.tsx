import { NavbarItem } from "../item/item.component";
import { NavbarTitle } from "../title/title.component";

export const NavbarContainer = () => (
  <nav className="navbar_container">
    <div className="wrapper">
      <NavbarTitle />
      <NavbarItem link={"#"} icon={"/facebook.png"} alt="facebook icon" />
      <NavbarItem link={"#"} icon={"/instagram.png"} alt="facebook icon" />
      <NavbarItem link={"#"} icon={"/youtube.png"} alt="facebook icon" />
      <NavbarItem link={"#"} icon={"/dribbble.png"} alt="facebook icon" />
    </div>
  </nav>
);
