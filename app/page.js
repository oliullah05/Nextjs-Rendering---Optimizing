import devinImage from "@/public/assets/images/devin.jpg";
import Image from "next/image";
import { blurDataURL } from "@/public/image/blurImageUrl";

export default function Home() {
    return (
        <div>
            <h1>Next.js Image Optimization</h1>

            <div className="mt-4 relative w-[800px] h-[400px] border-2 border-teal-300 overflow-hidden">
                <Image
                    placeholder="blur"
                    fill
                    priority={false}
                    quality={75}
                    src="https://img.youtube.com/vi/NgrljB7UU34/maxresdefault.jpg"
                    blurDataURL={blurDataURL}
                    alt="Will devin replace Programmers?"
                    className="object-cover"
                />
            </div>
        </div>
    );
}
