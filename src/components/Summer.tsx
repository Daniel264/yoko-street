import Image from "next/image";

export const Summer = () => {
    return (
        <div className="flex flex-row">
            <h1 className="clash-font">Summer is for</h1>
            <div className="flex flex-row">
                <Image src="/assets/images/white-cloud.svg" alt="White-cloud" width={70} height={200} />
                <Image src="/assets/images/sm-cloud.svg" alt="Small white cloud" width={50} height={50} />
                <Image src="/assets/images/orange.svg" alt="Orange" width={20} height={200} />
            </div>
        </div>
    );
};
