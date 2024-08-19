import axiosInstance from "../helpers/axiosInstance";

export async function fetchSearchData (searchText = "") {

    try{
        const response = await axiosInstance.get(`/search?query=${searchText}`);
        const data = response.data.coins;
        const coinData = data.length > 10 ? data.slice(0, 10) : data;
        console.log(coinData)
        return coinData;
    }
    catch(err){
        console.log(err);
        return [];
    }
}