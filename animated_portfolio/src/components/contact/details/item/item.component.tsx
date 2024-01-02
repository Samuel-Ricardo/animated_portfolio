import { IContactAreaDetailsItemProps } from "@/@types/props/contact/details/item";
import { MotionDiv } from "@/components/motion/div.component";
import { MODULES } from "@/modules/app.factory";

export const ContactAreaDetailsItem = ({
  title,
  description,
}: IContactAreaDetailsItemProps) => {
  return (
    <MotionDiv {...MODULES.ANIMATION.MOTION.SIMPLE.EMERGE()}>
      <h2>{title}</h2>
      <span>{description}</span>
    </MotionDiv>
  );
};
