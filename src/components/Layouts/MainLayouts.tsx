import Navbar from "@/pages/shared/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Navbar />

      <Outlet></Outlet>

      <div>Footer</div>
    </div>
  );
};
export default MainLayout;
