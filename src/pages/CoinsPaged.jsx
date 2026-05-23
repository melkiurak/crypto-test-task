import { useState } from "react"
import { useCoins } from "../hooks/useCoins";
import { CoinsTable } from "./CoinsTable";

export const CoinsPaged = () => {
    const [page, setPage] = useState(1);
    const perPage = 20;
    
    const { data, isLoading, error } = useCoins(page, perPage)
    
    if (error) return <div>Помилка: {error.message}</div>;
    
    const handleTableChange = (pagination) => {
        setPage(pagination.current)
    }

    return (
       <div>
            <h2>Top coins with pagination</h2>
            <CoinsTable 
                data={data} 
                loading={isLoading} 
                pagination={{
                    current: page,
                    pageSize: perPage,
                    total: 100,
                    showSizeChanger: false
                }}
                onChange={handleTableChange} 
            />
        </div>
    )
}