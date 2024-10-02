import Image from "next/image";

export const Order = () => {
    return (
        <div className="flex w-full flex-row justify-center gap-5 px-5 pt-8">
            <div className="flex bg-[#E0F2C3] px-7 ">
                <Image src="/assets/images/plate.svg" alt="Plate of food" width={100} height={100} />
            </div>
            <div className="border-y-2 border-black">
                <p className="text-sm sm:mt-5  sm:text-xl">
                    Place your order by<span className="font-semibold"> Tuesday 11:59pm EST</span> <br /> for delivery the following week (Tuesday 7/9 or Wednesday 7/10).
                </p>
            </div>
        </div>
    );
};
