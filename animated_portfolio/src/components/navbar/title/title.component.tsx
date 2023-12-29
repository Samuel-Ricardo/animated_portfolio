import "./title.style.scss";

import { INavbarTitleProps } from "@/@types/props/navbar/title";
import { MotionH1 } from "@/components/motion/h1.component";
import { MODULES } from "@/modules/app.factory";

export const NavbarTitle = ({ title = "Samuel Barros" }: INavbarTitleProps) => {
  const fadeIn = MODULES.ANIMATION.MOTION.FADE.IN();

  return <MotionH1 {...fadeIn({})}>{title}</MotionH1>;
};
