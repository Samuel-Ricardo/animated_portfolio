import { INavbarItemProps } from "@/@types/props/navbar/item";
import Image from "next/image";
import Link from "next/link";

export const NavbarItem = ({ link, icon, alt }: INavbarItemProps) => (
  <Link href={link} className="link">
    <Image src={icon} alt={alt} width={64} height={64} />
  </Link>
);
