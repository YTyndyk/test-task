import axios from "axios";

const tableinstance = axios.create({
	baseURL: "https://technical-task-api.icapgroupgmbh.com/api/",
});

export const gettableData = async () => {
	const { data } = await tableinstance.get("/table/");
	return data;
};
export const addBook = (data) => {
	return tableinstance.post("/table", data);
};
export const deleteTableDataEl = async () => {
	const { data } = await tableinstance.delete(`/table/${id}`);
	return data;
};
