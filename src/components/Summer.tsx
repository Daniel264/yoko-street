import Image from "next/image";

export const Summer = () => {
    return (
        <div className="flex w-full flex-col justify-center border-t-2 border-black pt-5">
            <div className="flex w-full flex-row justify-center">
                <h1 className="clash-font tracking-wider sm:text-5xl md:text-6xl lg:text-7xl">Summer is for</h1>
                <div className="flex flex-row rounded-2xl border-2 border-black border-opacity-50 bg-[#73E6FF] pl-6 sm:rounded-full md:rounded-full ">
                    <Image src="/assets/images/white-cloud.svg" alt="White-cloud" width={70} height={200} />
                    <Image className="pb-6" src="/assets/images/sm-cloud.svg" alt="Small white cloud" width={50} height={50} />
                    <Image src="/assets/images/orange.svg" alt="Orange" width={40} height={200} />
                </div>
            </div>
            <div className="flex w-full justify-center">
                <h1 className="clash-font text-3xl font-semibold tracking-wider sm:text-7xl md:text-8xl lg:text-9xl">chilled noodles</h1>
            </div>
            <div className="w-full h-[90vh] flex justify-center"> {/* Adjust height here */}
                <Image 
                    src="/assets/images/noodles.svg" 
                    alt="Noodles" 
                    layout="responsive" 
                    width={1000}  // Maintain the original width of the SVG
                    height={300} // Maintain the aspect ratio; adjust this value to control height
                    className="object-contain" // Ensure the image maintains aspect ratio
                />
            </div>
        </div>
    );
};
