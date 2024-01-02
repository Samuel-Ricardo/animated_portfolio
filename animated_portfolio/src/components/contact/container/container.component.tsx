import { MotionDiv } from "@/components/motion/div.component";
import "./container.style.scss";
import { IContactAreaContaierProps } from "@/@types/props/contact/container";
import { MODULES } from "@/modules/app.factory";

export const ContactAreaContainer = ({
  children,
  target,
}: IContactAreaContaierProps) => {
  const animation = MODULES.ANIMATION.MOTION.SIMPLE.EMERGE();

  return (
    <MotionDiv
      className="_container"
      ref={target}
      {...animation}
      initial="initial"
      whileInView="animate"
    >
      {children}
    </MotionDiv>
  );
};
