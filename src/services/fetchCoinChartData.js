import axiosInstance from "../helpers/axiosInstance";

export async function fetchCoinChartData(id,  currency = "usd", days = 30,) {
    try {
        const response = await axiosInstance.get(`/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`);
        return response.data;

    } catch(error) {
        console.error(error);
        return [];
    }
}