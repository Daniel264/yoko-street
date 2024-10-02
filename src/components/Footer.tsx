import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="flex w-full justify-center mt-10 bg-[#705C35] p-5">
            {/* <h1 className="text-3xl font-semibold">Header</h1> */}
            <Image src="/assets/logo/Logoo.svg" alt="Logo" width={100} height={100} />
        </footer>
    );
};
