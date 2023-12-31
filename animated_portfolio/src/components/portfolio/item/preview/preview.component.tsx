import { IPortfolioItemPreviewProps } from "@/@types/props/portfolio/item/preview";
import Image from "next/image";

export const PortfolioItemPreview = ({
  src,
  target,
}: IPortfolioItemPreviewProps) => {
  return (
    <div ref={target}>
      <Image src={src} alt="Portfolio preview image" fill objectFit="cover" />
    </div>
  );
};
