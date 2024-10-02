import { Button } from "./Button";
import { ImageGrid } from "./ImageGrid";

export const Menu = () => {
    return (
        <div className="flex w-full flex-col items-center justify-center pt-10">
            <div className="rounded-full border-2 border-black border-opacity-70 bg-[#E0F2C3] px-7 py-3">
                <h1 className="clash-font text-3xl sm:text-6xl lg:text-7xl">Explore the Menu</h1>
            </div>
            <div className="flex w-full justify-center pt-10">
                <p className="text-center text-xl">
                    Chilled Noodles, Spicy Miso Ramen with Seasonal <br /> Veggies, and Ume (Plum) Teriyaki, celebrating peak <br /> plum season.
                </p>
            </div>

            <div className="w-full px-7 pt-10 lg:px-28 ">
                <ImageGrid />
            </div>
            <div className="pt-10">
                <Button text={"EXPLORE MENU"} bgColor="orange-600" />
            </div>
        </div>
    );
};
