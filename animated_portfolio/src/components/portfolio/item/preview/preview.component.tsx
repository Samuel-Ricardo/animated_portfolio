import Image from "next/image";

export const PortfolioItemPreview = ({ src }: { src: string }) => {
  return (
    <div>
      <Image src={src} alt="Portfolio preview image" fill objectFit="cover" />
    </div>
  );
};
