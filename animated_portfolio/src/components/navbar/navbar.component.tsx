import { NavbarContainer } from "./container/container.component";
import { NavbarItem } from "./item/item.component";
import { NavbarTitle } from "./title/title.component";

export const Navbar = () => (
  <NavbarContainer>
    <NavbarTitle />
    <div className="social">
      <NavbarItem link={"#"} icon={"/facebook.png"} alt="facebook icon" />
      <NavbarItem link={"#"} icon={"/instagram.png"} alt="facebook icon" />
      <NavbarItem link={"#"} icon={"/youtube.png"} alt="facebook icon" />
      <NavbarItem link={"#"} icon={"/dribbble.png"} alt="facebook icon" />
    </div>
  </NavbarContainer>
);
