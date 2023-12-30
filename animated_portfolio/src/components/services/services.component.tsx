import "./services.style.scss";

import { MODULES } from "@/modules/app.factory";
import { MotionDiv } from "../motion/div.component";
import { ServicesContainer } from "./container/container.component";
import { Footnote } from "./footnote/footnote.component";
import { ServicesHeader } from "./header/header.component";
import { ServicesItem } from "./items/item.component";

export const ServicesOverview = () => (
  <ServicesContainer>
    <Footnote />
    <ServicesHeader />
    <MotionDiv className="item_list" {...MODULES.ANIMATION.MOTION.SLIDE.IN()}>
      <ServicesItem />
      <ServicesItem />
      <ServicesItem />
      <ServicesItem />
    </MotionDiv>
  </ServicesContainer>
);
