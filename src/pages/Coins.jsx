import { Table } from "antd";
import { useCoins } from "../hooks/useCoins"
import { CoinsTable } from "./CoinsTable";
import { Typography } from "antd";

export const  Coins = () => {
    const { data, isLoading, error } = useCoins(1, 50);
    const { Title } = Typography;

    if (isLoading) return <div>Завантаження монет</div>;
    
    if (error) return <div>Помилка: {error.message}</div>;

    return (
        <div>
            <Title level={4}>Таблиця криптовалют</Title>
            <CoinsTable data={data} loading={isLoading} pagination={false}/>
        </div>
    )
}