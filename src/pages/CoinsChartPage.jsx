import { useState } from "react"
import { useCoinsChart } from "../hooks/useCoinChart";
import { Segmented, Button, Card, Spin } from "antd";
import { ReloadOutlined } from "@ant-design/icons";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";
export const CoinsChartPage = () => {
    const [selectedCoin, setSelectedCoin] = useState("bitcoin");

    const { data, isLoading, isFetching, refetch, error } = useCoinsChart(selectedCoin);

    const coinOptions = [
        { label: "Bitcoin", value: "bitcoin" },
        { label: "Ethereum", value: "ethereum" },
        { label: "Dogecoin", value: "dogecoin" },
    ];
    const showLoader = isLoading || (isFetching && !isLoading);

    if (error) return <div>Помилка: {error.message}</div>;

    return (
        <div style={{ padding: "24px", maxWidth: "900px", margin: "0 auto" }}>
            <h2>Графік курсу за останні 7 днів</h2>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", gap: "16px" }}>
                <Segmented options={coinOptions} value={selectedCoin} onChange={(value) => setSelectedCoin(value)} size="large"/>
                <Button type="primary" icon={<ReloadOutlined />} onClick={() => refetch()}loading={isFetching}>
                    Оновити
                </Button>
            </div>
            <Card style={{ position: "relative", minHeight: "400px" }}>
                <Spin spinning={showLoader} description="Завантаження графіка..." size="large">
                    <div style={{ width: "100%", height: 400 }}>
                        {data && (
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={data} margin={{ top: 10, right: 30, left: 20, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#1890ff" stopOpacity={0.3}/>
                                            <stop offset="95%" stopColor="#1890ff" stopOpacity={0}/>
                                        </linearGradient>
                                    </defs>
                                    <XAxis dataKey="date" tick={{ fontSize: 10 }} minTickGap={50} />
                                    <YAxis domain={["auto", "auto"]} tickFormatter={(value) => `$${value.toLocaleString()}`}tick={{ fontSize: 12 }}/>
                                    <Tooltip formatter={(value) => [`$${Number(value).toLocaleString()}`, "Ціна"]}/>
                                    <Area type="monotone" dataKey="price" stroke="#1890ff" strokeWidth={2}fillOpacity={1} fill="url(#colorPrice)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        )}
                    </div>
                </Spin>
            </Card>
        </div>
    );
};
