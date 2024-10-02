import { Advert } from "@/components/Advert";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Menu } from "@/components/Menu";
import { Order } from "@/components/Order";
import SEO from "@/components/SEO";
import { Summer } from "@/components/Summer";
import React, { useEffect } from "react";
import Lenis from "lenis";

export default function Home() {
    useEffect(() => {
        const lenis = new Lenis();

        lenis.on("scroll", (e) => {
            console.log(e);
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);
    return (
        <div className="bg-white text-black">
            <SEO title="Yoko Street" />

            {/* <main className="flex min-h-screen flex-col items-center p-5">
    

                <div className="max-w-8xl m-auto">
                    <h3 className="my-5 text-5xl font-semibold">Home</h3>
                </div>
            </main> */}
            <Header />
            <Summer />
            <Order />
            <Menu />
            <Advert />
            <Footer />
        </div>
    );
}
