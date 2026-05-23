import { Table } from "antd";

export const CoinsTable = ({data, loading, pagination, onChange}) => {
    const colums = [
        {
            title: "#",
            dataIndex: "market_cap_rank",
            key: "rank",
            width: 60,
            sorter: (a,b) => a.market_cap_rank - b.market_cap_rank
        },
        {
            title: "Name",
            key: "name",
            render: (_, record) => (
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <img src={record.image} alt={record.name} style={{ width: "24px", height: "24px", objectFit: "contain" }}/>
                    <span>{record.name}</span>
                </div>
            )
        },
        {
            title: "Price",
            dataIndex: "current_price",
            key: "price",
            sorter: (a,b) => a.current_price - b.current_price, 
            render: (price) => price ? `$${price.toLocaleString()}` : "-"
        },
        {
            title: "24h %",
            dataIndex: "price_change_percentage_24h",
            key: "priceChange",
            sorter: (a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h,
            render: (percent) => {
                const isPostive = percent >= 0;
                return (
                    <span style={{color: isPostive ? "green" : "red"}}>{isPostive ? "+" : ''}{percent.toFixed(2)}%</span>
                )
            }
        },
        {
            title: "Market Cap",
            dataIndex: "market_cap",
            key: "marketCap",
            sorter: (a,b) => a.market_cap - b.market_cap,
            render: (valueMarketCap) => valueMarketCap ? `$${valueMarketCap.toLocaleString()}` : "-"
        },
        {
            title: "Volume 24h",
            dataIndex: "total_volume",
            key: "volume",
            sorter: (a,b) => a.total_volume - b.total_volume,
            render: (valueVolume) => `$${valueVolume.toLocaleString()}`
        }
    ];
    return (
        <Table dataSource={data} columns={colums} rowKey="id" scroll={{ y: 500 }} loading={loading} pagination={pagination} onChange={onChange}/>
    )
}