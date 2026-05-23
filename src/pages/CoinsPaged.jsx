import { useState } from "react"
import { useCoins } from "../hooks/useCoins";

export const CoinsPaged = () => {
    const [page, setPage] = useState(1);
    const perPage = 20;
    const {data, isLogind, error} = useCoins(page, perPage)
    
    if (error) return <div>Помилка: {error.message}</div>;
    
    return (
        <div>
            
        </div>
    )
}