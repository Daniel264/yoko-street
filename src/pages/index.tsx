import { Header } from "@/components/Header";
import { Menu } from "@/components/Menu";
import { Order } from "@/components/Order";
import SEO from "@/components/SEO";
import { Summer } from "@/components/Summer";
import React from "react";

export default function Home() {
    return (
        <>
            <SEO title="Home" />

            {/* <main className="flex min-h-screen flex-col items-center p-5">
    

                <div className="max-w-8xl m-auto">
                    <h3 className="my-5 text-5xl font-semibold">Home</h3>
                </div>
            </main> */}
            <Header />
            <Summer />
            <Order />
            <Menu />
        </>
    );
}
