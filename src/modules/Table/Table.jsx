import { useState, useEffect } from "react";

import { gettableData, deleteTableDataEl } from "../../shared/api/table";

const Table = () => {
	const [tableData, setTableData] = useState([]);
	console.log(tableData);
	const [deletedId, setDeletedId] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchTableData = async () => {
			try {
				setLoading(true);
				const data = await gettableData();
				setTableData(data);
			} catch (error) {
				const errorMessage = error.message || "Cannot fetch data";
				setError(errorMessage);
			} finally {
				setLoading(false);
			}
		};
		fetchTableData();
	}, []);

	useEffect(() => {
		const fetchDeleteTableEl = async () => {
			try {
				await deleteTableDataEl(deletedId);
				setTableData((prev) => prev.filter(({ id }) => id !== deletedId));
			} catch (error) {
				console.log(error.message);
			}
		};
		if (deletedId) {
			fetchDeleteTableEl();
		}
	}, [deletedId]);

	const elements =
		tableData &&
		tableData.map(
			({ id, name, email, birthday_date, phone_number, address }) => (
				<li key={id}>
					{name}
					{email}
					{birthday_date}
					{phone_number}
					{address}
					<button onClick={() => setDeletedId(id)} type="button">
						Delete
					</button>
				</li>
			),
		);

	return (
		<>
			{loading && <p>....Loading</p>}
			{error && <p className={styles.error}>{error}</p>}
			<ol>{elements}</ol>
		</>
	);
};
export default Table;
