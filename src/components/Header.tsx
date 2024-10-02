import Image from "next/image";

export const Header = () => {
    return (
        <header className="flex items-center justify-between p-5">
            <h1 className="text-3xl font-semibold">Header</h1>
            <Image src="/assets/logo/Logoo.svg" alt="Logo" width={50} height={50} />
        </header>
    );
};
