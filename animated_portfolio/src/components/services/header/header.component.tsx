import "./header.style.scss";

import { MotionB } from "@/components/motion/b.component";
import { MotionDiv } from "@/components/motion/div.component";
import Image from "next/image";

export const ServicesHeader = () => {
  return (
    <MotionDiv className="header">
      <div className="title">
        <Image
          src="/people.webp"
          alt="peoples in meet"
          width={300}
          height={100}
        />
        <h1>
          <MotionB whileHover={{ color: "orange" }}>Unique</MotionB> Ideas
        </h1>
      </div>
      <div className="title">
        <h1>
          <MotionB whileHover={{ color: "orange" }}>For Your</MotionB> Business.
        </h1>
        <button>WHAT WE DO?</button>
      </div>
    </MotionDiv>
  );
};
