import axiosInstance from "../helpers/axiosInstance";

export async function fetchHistoricalPrice(id, currency, days) {
    try {
        const response = await axiosInstance.get(`/coins/${id}/market_chart?vs_currency=${currency}&days=${days}&interval=daily&precision=3`);
        return response.data;

    } catch(error) {
        console.error(error);
        return null;
    }
}