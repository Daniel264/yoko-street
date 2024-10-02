import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="mt-10 flex w-full flex-col items-center justify-center bg-[#705C35] p-5">
            {/* <h1 className="text-3xl font-semibold">Header</h1> */}
            <Image src="/assets/logo/Logoo.svg" alt="Logo" width={100} height={100} />
            <div className="flex w-full justify-center gap-4 border-t-2 border-white border-opacity-50 pt-8">
                <Image src="/assets/images/instagram.svg" alt="Instagram" width={20} height={50} />
                <Image src="/assets/images/linkedin.svg" alt="Instagram" width={20} height={50} />
            </div>
        </footer>
    );
};
