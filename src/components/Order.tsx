import Image from "next/image";

export const Order = () => {
    return (
        <div className="flex flex-row w-full justify-center">
            <div>
                <Image src="/assets/images/plate.svg" alt="Plate of food" width={100} height={100} />
            </div>
            <div>
                <p className="text-xl">
                    Place your order by<span className="font-semibold"> Tuesday 11:59pm EST</span> <br /> for delivery the following week (Tuesday 7/9 or Wednesday 7/10).
                </p>
            </div>
        </div>
    );
};
