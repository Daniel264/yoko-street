import Image from "next/image";

export const Advert = () => {
    return (
        <div className="flex w-full flex-row justify-center gap-5 px-5 pt-8">
            <div className="bg-[#E0F2C3] px-7">
                <Image src="/assets/images/left-img.svg" alt="Plate of food" width={100} height={100} />
                <Image src="/assets/images/mid-img.svg" alt="Plate of food" width={100} height={100} />
                <Image src="/assets/images/right-img.svg" alt="Plate of food" width={100} height={100} />
            </div>
            <div className="">
                <h1 className="text-3xl font-medium">
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
