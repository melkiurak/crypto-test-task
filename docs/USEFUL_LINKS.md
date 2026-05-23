# Корисні посилання

---

## Завдання 1 - Тема і глобальні стилі

- [Customize Theme](https://ant.design/docs/react/customize-theme) - як прокинути тему через `ConfigProvider`.
- [Table - Design Token](https://ant.design/components/table#design-token) - токени `headerBg`, `headerColor`, `rowHoverBg`, `cellPaddingBlock`.
- [Button - Design Token](https://ant.design/components/button#design-token) - `borderRadius` глобально.
- [Налаштувати конфіг](https://ant.design/theme-editor) - може допомогти налаштувати глобальний конфіг одразу

---

## Завдання 2 - Таблиця

- [TanStack Query - `useQuery`](https://tanstack.com/query/v5/docs/framework/react/guides/queries) - базовий запит.
- [Table - Fixed Header](https://ant.design/components/table#components-table-demo-fixed-header) - sticky хедер через `scroll.y`.
- [Table - sorter](https://ant.design/components/table#column) - `sorter: (a, b) => a.x - b.x`.
- [CoinGecko `/coins/markets`](https://docs.coingecko.com/reference/coins-markets) - формат відповіді.

---

## Завдання 3 - Пагінація (server-side)

- [TanStack Query - `placeholderData: keepPreviousData`](https://tanstack.com/query/v5/docs/framework/react/guides/paginated-queries) - щоб таблиця не «стрибала» між сторінками.
- [Table - `pagination` prop](https://ant.design/components/table#pagination) - `current`, `pageSize`, `total`, `onChange`.

---

## Завдання 4 - Графік з авто-рефрешем

- [TanStack Query - `refetchInterval`](https://tanstack.com/query/v5/docs/framework/react/guides/important-defaults) - поллінг у фоні.
- [`isLoading` vs `isFetching`](https://tanstack.com/query/v5/docs/framework/react/guides/queries#query-basics) - головна відмінність для цього завдання.
- [Recharts - LineChart](https://recharts.org/en-US/examples/SimpleLineChart) - найшвидший варіант графіка.
- [AntD `Segmented`](https://ant.design/components/segmented) - перемикач монет.
- [CoinGecko `/coins/{id}/market_chart`](https://docs.coingecko.com/reference/coins-id-market-chart) - формат `prices: [[timestamp, price], ...]`.

---

## Завдання 5 - Форма

- [AntD `Form` - Basic Usage](https://ant.design/components/form) - `Form.useForm()`, `onFinish`.
- [Form - Validation Rules](https://ant.design/components/form#rule) - `required`, `type: 'email'`, `min`, `max`.
- [AntD `InputNumber`](https://ant.design/components/input-number) - для `age` з `min`/`max`.
- [AntD `Descriptions`](https://ant.design/components/descriptions) - зручно показати підсумок після сабміту.
