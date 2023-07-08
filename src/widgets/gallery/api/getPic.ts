import { InstanceAxios } from "shared/api/config";
import { ImageRequest } from "shared/api/types";

export const getPic = async (category: string, countGet: string) => {
	console.log(category);
	if (!category || !countGet) {
		return;
	}
	const data = await InstanceAxios.get<{ results: ImageRequest[] }>(`/${category}?amount=${countGet}`);
	return data.data;
};
