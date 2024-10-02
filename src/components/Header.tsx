import Image from "next/image";

export const Header = () => {
    return (
        <header className="flex w-full justify-center p-5">
            {/* <h1 className="text-3xl font-semibold">Header</h1> */}
            <Image src="/assets/logo/logoo.svg" alt="Logo" width={100} height={100} />
        </header>
    );
};
