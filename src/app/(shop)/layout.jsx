import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Provider } from "@/components/Providers";

const MainLayout = ({ children }) => {
    return (
        <Provider>
            <>
                <Navbar />
                <main className="main-container">
                    {children}
                </main>
                <Footer />
            </>
        </Provider>
    );
};

export default MainLayout;
