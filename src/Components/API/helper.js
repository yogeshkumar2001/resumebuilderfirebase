import axios from "axios";
import { APIURL } from "./constant";
export const getCallAPI = async ({ path, params = null }) => {
    let apiPath = params != null ? APIURL + path + params : APIURL + path;
    try {
        let res = await axios.get(apiPath)
        return res;
    }
    catch (error) {
        console.error("Error in getCallAPI:", error);
        throw error; // Re-throw the error to handle it elsewhere if needed
    }
}
export const postCallAPI = async ({ path, Data }) => {
    console.log(path,Data)
    if (!Data) {
        return "required data for post call";
    }

    let apiPath = APIURL + path;
    try {
        let response = await axios.post(apiPath, { data: Data });
        return response.data; // Extract the data from the axios response
    } catch (error) {
        console.error("Error in postCallAPI:", error);
        throw error; // Re-throw the error to handle it elsewhere if needed
    }
};
export const deleteCallAPI = async ({path})=>{
    if (!path) {
        return "required path for delete call";
    }
    let apiPath = APIURL+path;
    try{
        let response = await axios.delete(apiPath);
        return response.data;
    }catch (error) {
        console.error("Error in deleteCallAPI:", error);
        throw error; // Re-throw the error to handle it elsewhere if needed
    }
}