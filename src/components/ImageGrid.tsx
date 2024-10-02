import Image from "next/image";

const ImageData = [
    {
        type: "image",
        src: "/assets/images/Miso.svg",
        alt: "White-cloud",
    },
    {
        type: "text",
        content: "Text"
    }
];

export const ImageGrid = () => {
    return (
        <div>
            <div className="grid grid-cols-2 gap-4">
                {ImageData.map((item, index) => (
                    <div key={index} className="w-full">
                        {item.type === "image" ? (
                            <Image src={item.src} alt={item.alt} width={500} height={100} />
                        ) : (
                            <p>{item.content}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};
