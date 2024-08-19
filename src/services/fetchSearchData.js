import axiosInstance from "../helpers/axiosInstance";

export async function fetchSearchData (searchText = "") {

    try{
        if (searchText == ""){
            return [];
        }
        const response = await axiosInstance.get(`/search?query=${searchText}`);
        const data = response.data.coins;
        const coinData = data.length > 8 ? data.slice(0, 8) : data;
        console.log(coinData)
        return coinData;
    }
    catch(err){
        console.log(err);
        return [];
    }
}