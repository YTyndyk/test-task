import axios from "axios";

const instance = axios.create({
	baseURL: "https://technical-task-api.icapgroupgmbh.com/api/",
});

export const login = (data) => {
	const { data: result } = instance.post("/login/", data);
	return result;
};
