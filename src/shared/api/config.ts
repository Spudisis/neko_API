import axios from "axios";
const config = {};
export const InstanceAxios = axios.create({
	baseURL: "https://nekos.best/api/v2",
	...config,
});
