import Image from "next/image";
import logo from "@/assets/medmytrip_logo.png";

export function MedMyTripLogo({ className = "" }: { className?: string }) {
  return <Image src={logo} alt="MedMyTrip" className={`object-contain ${className}`} priority />;
}
