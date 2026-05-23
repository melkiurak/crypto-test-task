import { useQuery } from "@tanstack/react-query"

const MOCK_COINS = [
    {
        id: "bitcoin",
        market_cap_rank: 1,
        name: "Bitcoin",
        symbol: "btc",
        image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
        current_price: 67250,
        price_change_percentage_24h: 2.45,
        market_cap: 1320000000000,
        total_volume: 28000000000
    },
    {
        id: "ethereum",
        market_cap_rank: 2,
        name: "Ethereum",
        symbol: "eth",
        image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
        current_price: 3510,
        price_change_percentage_24h: -1.20, 
        market_cap: 420000000000,
        total_volume: 15000000000
    }
];

export const useCoins = (page, perPage) => {
    return useQuery({
        queryKey: ["coinsKey", page, perPage],
        queryFn:  async () => {
            const response = await fetch(`/api/coins/markets?vs_currency=usd&per_page=${perPage}&page=${page}`);
            if(!response.ok) {
                throw new Error("The coins did not download");
            }
            return response.json();
        },
        placeholderData: (keepPreviousData) => keepPreviousData,
        staleTime: 30000,
    })
}