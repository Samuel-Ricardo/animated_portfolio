import "./preview.style.scss";

import { IPortfolioItemPreviewProps } from "@/@types/props/portfolio/item/preview";
import Image from "next/image";

export const PortfolioItemPreview = ({
  src,
  target,
}: IPortfolioItemPreviewProps) => {
  return (
    <div className="preview_image" ref={target}>
      <Image src={src} alt="Portfolio preview image" width={800} height={800} />
    </div>
  );
};
