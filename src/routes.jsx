import { HomeOutlined } from "@ant-design/icons";
import Home from "./pages/Home.jsx";

export const routes = [
    { path: "/", label: "Home", icon: <HomeOutlined />, element: <Home /> },
];
