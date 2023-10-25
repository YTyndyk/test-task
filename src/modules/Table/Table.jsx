import { useState, useEffect } from "react";
import { gettableData, deleteTableDataEl } from "../../shared/api/table";

import styles from "./table.module.scss";

const Table = () => {
	const [tableData, setTableData] = useState([]);
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

	let content;

	if (loading) {
		content = <p>Loading...</p>;
	} else if (error) {
		content = <p className={styles.error}>{error}</p>;
	} else {
		content = (
			<tb className={styles.tb}>
				{tableData.results &&
					tableData.results.map(
						({ id, name, email, birthday_date, phone_number, address }) => (
							<tr key={id} className={styles.table}>
								<td className={styles.td}>{name}</td>
								<td className={styles.td}>{email}</td>
								<td className={styles.td}>{birthday_date}</td>
								<td className={styles.td}>{phone_number}</td>
								<td className={styles.td}>{address}</td>
								<button onClick={() => setDeletedId(id)} type="button">
									Delete
								</button>
								<button type="button">Add</button>
							</tr>
						),
					)}
			</tb>
		);
	}

	return (
		<>
			<thead className={styles.thead}>
				<tr className={styles.tableRaw}>
					<th className={styles.th}>Name</th>
					<th className={styles.th}>Email</th>
					<th className={styles.th}>Birthday_date</th>
					<th className={styles.th}>Phone_number</th>
					<th className={styles.th}>Adress</th>
				</tr>
			</thead>
			<div>{content}</div>
		</>
	);
};
export default Table;
