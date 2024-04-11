import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar/Navbar";
import Footer from "../pages/shared/Footer/Footer";

const MainLayouts = () => {
  return (
    <div className="max-w-6xl mx-auto font-roboto">
      <div className="h-16">
        <Navbar />
      </div>
      <div className="min-h-[calc(100vh-64px)]">
        <Outlet />
      </div>
      <div className="bg-[#050709] text-white">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayouts;
