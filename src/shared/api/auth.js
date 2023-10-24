import axios from "axios";

const instance = axios.create({
	baseURL: "https://technical-task-api.icapgroupgmbh.com/api/",
});

export const login = async (data) => {
	const { data: result } = await instance.post("/login/", data);
	return result;
};
