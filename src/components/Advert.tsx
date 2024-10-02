import Image from "next/image";

export const Advert = () => {
    return (
        <div className="flex h-full w-full flex-col items-center justify-center gap-5 px-5 pt-8">
            <div className="flex h-44  w-full bg-[#F6D4BB] sm:h-96 ">
                <Image src="/assets/images/left-img.svg" className="w-1/3 sm:w-full" alt="Plate of food" width={200} height={100} />
                <Image src="/assets/images/mid-img.svg" className="w-1/3 sm:w-full" alt="Plate of food" width={200} height={100} />
                <Image src="/assets/images/right-img.svg" className="w-1/3 sm:w-full" alt="Plate of food" width={200} height={100} />
            </div>
            <div className="">
                <h1 className="text-4xl sm:text-5xl font-medium">
                    Last chance to order <br />
                    Early Summer Bento
                </h1>
                <p className="mt-5  text-xl">
                    with garlic miso chicken & grilled corn rice. <br /> Get this-to-go bento for your summer picnic!
                </p>
            </div>
        </div>
    );
};
