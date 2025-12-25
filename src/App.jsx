import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Mac from "./pages/Mac/Mac";
import IPad from "./pages/iPad/iPad";
import IPhone from "./pages/iPhone/iPhone";
import Watch from "./pages/Watch/Watch";
import Vision from "./pages/Vision";
import AirPods from "./pages/AirPods";
import TVHome from "./pages/TVHome";
import Accessories from "./pages/Accessories";
import Support from "./pages/Support/Support";

function App() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="store" element={<Store />} />
                <Route path="mac" element={<Mac />} />
                <Route path="ipad" element={<IPad />} />
                <Route path="iphone" element={<IPhone />} />
                <Route path="watch" element={<Watch />} />
                <Route path="vision" element={<Vision />} />
                <Route path="airpods" element={<AirPods />} />
                <Route path="tvhome" element={<TVHome />} />
                <Route path="accessories" element={<Accessories />} />
                <Route path="support" element={<Support />} />
            </Route>
        </Routes>
    );
}

export default App;
