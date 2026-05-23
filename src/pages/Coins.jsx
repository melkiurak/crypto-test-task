import { Table } from "antd";
import { useCoins } from "../hooks/useCoins"
import { CoinsTable } from "./CoinsTable";

export const  Coins = () => {
    const { data, isLoading, error } = useCoins(1, 50);

    if (isLoading) return <div>Завантаження монет</div>;
    
    if (error) return <div>Помилка: {error.message}</div>;

    return (
        <div>
            <CoinsTable data={data} loading={isLoading} pagination={false}/>
        </div>
    )
}