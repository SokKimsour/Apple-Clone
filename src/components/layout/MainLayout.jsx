import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
const MainLayout = () => {
    return (
        <>
            {/* Apple Navbar */}
            <Header />

            {/* Page Content */}
            <main className="pt-[44px] min-h-screen bg-white text-gray-900">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default MainLayout;
