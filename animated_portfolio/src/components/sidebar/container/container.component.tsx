import { ISidebarContainerProps } from "@/@types/props/sidebar/container";
import "./container.style.scss";
import { MotionDiv } from "@/components/motion/div.component";

export const SidebarContainer = ({
  open,
  children,
}: ISidebarContainerProps) => {
  return (
    <MotionDiv id="sidebar" animate={open ? "open" : "closed"}>
      {children}
    </MotionDiv>
  );
};
