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
    {
        type: "text",
        content: "Spicy Miso Pork Ramen with Kabocha, Zucchini, and Corn",
    },
    {
        type: "image",
        src: "/assets/images/yellow-tail.svg",
        alt: "Ume Teriyaki",
    },
    {
        type: "image",
        src: "/assets/images/tofu.svg",
        alt: "AN image of Tofu food",
    },
    {
        type: "text",
        content: "Yellowtail with Teriyaki Plum (Ume) Sauce",
    },
    {
        type: "text",
        content: "Tofu with Teriyaki Plum (Ume) Sauce",
    },
    {
        type: "image",
        src: "/assets/images/yam.svg",
        alt: "Plate of food",
    },
];

export const ImageGrid = () => {
    return (
        <div>
            <div className="grid grid-cols-2">
                {ImageData.map((item, index) => (
                    <div key={index} className="w-full border-y-2 border-black">
                        {item.type === "image" ? <Image className="w-full" src={item.src || "/default-image-path.svg"} alt={item.alt || "default alt text"} width={500} height={100} /> : <p className="clash-font text-4xl font-medium leading-normal tracking-wide">{item.content}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};
