import "./image.style.scss";
import Image from "next/image";

export const HeroImage = () => (
  <div className="perfil">
    <Image src="/hero.png" alt="hero perfil image" width={720} height={1280} />
  </div>
);
