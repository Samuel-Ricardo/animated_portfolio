import { MotionDiv } from "@/components/motion/div.component";
import { MotionH1 } from "@/components/motion/h1.component";
import { ContactAreaDetailsItem } from "./item/item.component";

export const ContactAreaDetails = () => {
  return (
    <MotionDiv>
      <MotionH1>Let&#39s Work Together</MotionH1>
      <ContactAreaDetailsItem
        title="Mail"
        description="samuelricardoofficial@gmail.com"
      />
      <ContactAreaDetailsItem title="Phone" description="+55 11 99999-9999" />
      <ContactAreaDetailsItem
        title="Github"
        description="https://github.com/samuelricardo"
      />
    </MotionDiv>
  );
};
