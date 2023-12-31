import { INavbarItemProps } from "@/@types/props/navbar/item";
import Image from "next/image";
import Link from "next/link";

export const NavbarItem = ({ link, icon, alt }: INavbarItemProps) => (
  <Link href={link}>
    <Image src={icon} alt={alt} width={38} height={38} className="rounded-md" />
  </Link>
);
