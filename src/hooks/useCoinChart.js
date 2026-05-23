import { keepPreviousData, useQuery } from "@tanstack/react-query"

export const useCoinsChart = (coinId) => {
    return useQuery({
        queryKey: ["coinChartKey", coinId],
        queryFn: async () => {
            const response = await fetch(`/api/coins/${coinId}/market_chart?vs_currency=usd&days=7`)
            if (!response.ok) {
                throw new Error("Не вдалося завантажити дані графіка");
            }
            return response.json()
        },
        select: (data) => {
            return data.prices.map(([timestamp, price]) => ({
                date: new Date(timestamp).toLocaleString("uk-UA", {
                    day: "numeric",
                    month: "short",
                    hour: "2-digit",
                    minute: "2-digit",
                }),
                price: price,
            }));
        },
        refetchInterval: 15000,
        placeholderData: (keepPreviousData) => keepPreviousData
    })
}