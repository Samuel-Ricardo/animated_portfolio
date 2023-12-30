import { MotionDiv } from "@/components/motion/div.component";
import "./item.style.scss";
import { IServiceItemProps } from "@/@types/props/services/item";

export const ServicesItem = ({
  title = "Branding",
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum libero enim nisi aliquam consectetur expedita magni eius ex corrupti animi! Ad nam pariatur assumenda quae mollitia libero repellat explicabo maiores?",
  buttonText: button = "Go",
}: IServiceItemProps) => {
  return (
    <MotionDiv
      className="item"
      whileHover={{ background: "lightgray", color: "black" }}
    >
      <h2>{title}</h2>
      <p>{description}</p>
      <button>{button}</button>
    </MotionDiv>
  );
};
