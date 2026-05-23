import { BarChartOutlined, DollarOutlined, FormOutlined, HomeOutlined } from "@ant-design/icons";
import Home from "./pages/Home.jsx";
import { Coins } from "./pages/Coins.jsx";
import { CoinsPaged } from "./pages/CoinsPaged.jsx";
import { CoinsChartPage } from "./pages/CoinsChartPage.jsx";
import { Wizard } from "./pages/Wizard.jsx";

export const routes = [
    { path: "/", label: "Home", icon: <HomeOutlined />, element: <Home /> },
    { path: '/coins', label: 'Coins', icon: <DollarOutlined />, element: <Coins/>},
    { path: '/coins-paged', label: 'Coins Paged', icon: <DollarOutlined />, element: <CoinsPaged/>},
    { path: "/chart", label: "Chart", icon: <BarChartOutlined />, element: <CoinsChartPage /> },
    { path: "/wizard", label: "Wizard", icon: <FormOutlined />, element: <Wizard /> },
];
