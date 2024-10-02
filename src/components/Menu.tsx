import { ImageGrid } from "./ImageGrid";

export const Menu = () => {
    return (
        <div className="flex w-full flex-col items-center justify-center pt-10">
            <div className="rounded-full border-2 border-black border-opacity-70 bg-[#E0F2C3] px-7 py-3">
                <h1 className="clash-font text-6xl lg:text-7xl">Explore the Menu</h1>
            </div>
            <div>
                <p className="text-xl">
                    Chilled Noodles, Spicy Miso Ramen with Seasonal <br /> Veggies, and Ume (Plum) Teriyaki, celebrating peak <br /> plum season.
                </p>
            </div>

            <div className="w-full px-7 lg:px-28">
                <ImageGrid />
            </div>
        </div>
    );
};
