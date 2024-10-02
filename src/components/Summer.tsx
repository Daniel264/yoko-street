import Image from "next/image";
import { Button } from "./Button";
import gsap from "gsap";
import { useEffect } from "react";

export const Summer = () => {
    useEffect(() => {
        gsap.from(".first-animation", {
            duration: 1,
            y: 60,

            opacity: 0,
            ease: "power4.inOut",
            delay: 0.5,
            stagger: 0.2,
        });
        gsap.to(".first-animation", {
            duration: 1,
            y: 0,
            x: 0,
            opacity: 1,
            ease: "power4.inOut",
            delay: 0.5,
            stagger: 0.2,
        });
    }, []);
    return (
        <div className="flex w-full flex-col justify-center border-t-2 border-black pt-5">
            <div className="flex w-full flex-row justify-center">
                <h1 className="clash-font first-animation text-2xl tracking-wider sm:text-5xl md:text-6xl lg:text-7xl">Summer is for</h1>
                <div className="flex flex-row rounded-2xl border-2 border-black border-opacity-50 bg-[#73E6FF] pl-6 sm:rounded-full md:rounded-full ">
                    <Image src="/assets/images/white-cloud.svg" alt="White-cloud" width={70} height={200} />
                    <Image className="pb-6" src="/assets/images/sm-cloud.svg" alt="Small white cloud" width={50} height={50} />
                    <Image src="/assets/images/orange.svg" alt="Orange" width={40} height={200} />
                </div>
            </div>
            <div className="flex w-full justify-center">
                <h1 className="clash-font first-animation text-3xl font-semibold tracking-wider sm:text-7xl md:text-8xl lg:text-9xl">chilled noodles</h1>
            </div>
            <div className="flex h-full w-full justify-center px-7">
                {" "}
                {/* Adjust height here */}
                <Image
                    src="/assets/images/noodle.svg"
                    alt="Noodles"
                    className=" sm:h-[60vh] lg:h-[80vh] lg:w-[60%]"
                    width={1000} // Maintain the original width of the SVG
                    height={300} // Maintain the aspect ratio; adjust this value to control height
                    // Ensure the image maintains aspect ratio
                />
            </div>

            <div className="pt-10 text-xl lg:pt-20">
                <p className="text-center first-animation">
                    <span className="text-orange-500">Hiyashi Chucka</span> translates to chilled Chinese-style <br className="hidden lg:block" /> noodles in Japanese. It is a Japanese dish that is popular <br className="hidden lg:block" /> during summer, known for its chilled noodles and colorful{" "}
                    <br className="hidden lg:block" /> toppings, making it a refreshing choice during <br className="hidden lg:block" /> hot weather
                </p>
            </div>
            <div className="flex w-full justify-center pt-5">
                <Button text={"GET STARTED"} bgColor={"pink-400"} />
            </div>
        </div>
    );
};
