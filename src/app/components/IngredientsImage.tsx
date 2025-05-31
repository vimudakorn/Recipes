import Image from 'next/image';

export default function IngredientsImage() {
    return (
        <Image
            className="hover:scale-105 transition-transform duration-300"
            alt="mango"
            src="/mango.png"
            width={200}
            height={200}
        />
    );
}