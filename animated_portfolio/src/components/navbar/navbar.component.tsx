import { INavbarTitleProps } from "@/@types/props/navbar/title";
import { NavbarContainer } from "./container/container.component";
import { NavbarItem } from "./item/item.component";
import { NavbarTitle } from "./title/title.component";
import { MotionDiv } from "../motion/div.component";
import { MODULES } from "@/modules/app.factory";

export const Navbar = ({ title }: INavbarTitleProps) => (
  <NavbarContainer>
    <NavbarTitle title={title} />
    <MotionDiv className="social" {...MODULES.ANIMATION.MOTION.FADE.IN()({})}>
      <NavbarItem link={"#"} icon={"/facebook.png"} alt="facebook icon" />
      <NavbarItem link={"#"} icon={"/instagram.png"} alt="facebook icon" />
      <NavbarItem link={"#"} icon={"/youtube.png"} alt="facebook icon" />
      <NavbarItem link={"#"} icon={"/dribbble.png"} alt="facebook icon" />
    </MotionDiv>
  </NavbarContainer>
);
