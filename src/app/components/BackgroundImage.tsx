import Image from "next/image";

export default function BackgroundImage() {
  return (
    <Image
      alt="background food"
      src="/food1.jpg"
      fill
      className="object-cover"
    />
  );
}
