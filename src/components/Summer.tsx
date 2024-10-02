import Image from "next/image";

export const Summer = () => {
    return (
        <div className="flex flex-row w-full justify-center border-t-2 pt-5 border-black">
            <h1 className="clash-font text-7xl tracking-wider">Summer is for</h1>
            <div className="flex flex-row rounded-2xl sm:rounded-full md:rounded-full bg-[#73E6FF] pl-6 border-2 border-black border-opacity-50 ">
                <Image src="/assets/images/white-cloud.svg" alt="White-cloud" width={70} height={200} />
                <Image className="pb-6" src="/assets/images/sm-cloud.svg" alt="Small white cloud" width={50} height={50} />
                <Image src="/assets/images/orange.svg" alt="Orange" width={40} height={200} />
            </div>
        </div>
    );
};
