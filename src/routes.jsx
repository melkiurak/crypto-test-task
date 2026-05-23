import { BarChartOutlined, DollarOutlined, HomeOutlined } from "@ant-design/icons";
import Home from "./pages/Home.jsx";
import { Coins } from "./pages/Coins.jsx";
import { CoinsPaged } from "./pages/CoinsPaged.jsx";
import { CoinsChartPage } from "./pages/CoinsChartPage.jsx";

export const routes = [
    { path: "/", label: "Home", icon: <HomeOutlined />, element: <Home /> },
    { path: '/coins', label: 'Coins', icon: <DollarOutlined />, element: <Coins/>},
    { path: '/coins-paged', label: 'Coins Paged', icon: <DollarOutlined />, element: <CoinsPaged/>},
    { path: "/chart", label: "Chart", icon: <BarChartOutlined />, element: <CoinsChartPage /> }
];
