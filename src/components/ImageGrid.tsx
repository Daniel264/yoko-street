import Image from "next/image";

const ImageData = [
    {
        type: "image",
        src: "/assets/images/Miso.svg",
        alt: "White-cloud",
    },
    {
        type: "text",
        content: "Hiyashi Chucka Chilled Noodles",
    },
];

export const ImageGrid = () => {
    return (
        <div>
            <div className="grid grid-cols-2">
                {ImageData.map((item, index) => (
                    <div key={index} className="w-full border-y-2 border-black">
                        {item.type === "image" ? <Image className="w-full" src={item.src || "/default-image-path.svg"} alt={item.alt || "default alt text"} width={500} height={100} /> : <p className="clash-font text-4xl font-semibold leading-normal tracking-wide">{item.content}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};
