import Image from "next/image";

const ImageData = [
    {
        src: "/assets/images/Miso.svg",
        alt: "White-cloud",
    },
];

export const ImageGrid = () => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-4">
                {ImageData.map((image) => (
                    <div key={image.src}>
                        <Image src={image.src} alt={image.alt} width={100} height={100} />
                    </div>
                ))}
            </div>
        </div>
    );
};
