import "./image.style.scss";
import Image from "next/image";

export const HeroImage = () => (
  <div className="perfil">
    <Image
      src="https://github.com/Samuel-Ricardo/BioMisa-Site/blob/master/biomisa-site/src/Images/Samuel.png?raw=true"
      alt="hero perfil image"
      width={720}
      height={1280}
    />
  </div>
);
