import { useState, useEffect } from "react";
import { gettableData, deleteTableDataEl } from "../../shared/api/table";
import styles from "./table.module.scss";
import TableHeader from "../TableHeader/TableHeader";

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

	const content = (
		<tb className={styles.tb}>
			{tableData.results &&
				tableData.results.map(
					({ id, name, email, birthday_date, phone_number, address }) => (
						<tr key={id}>
							<td className={styles.td}>{name}</td>
							<td className={styles.td}>{email}</td>
							<td className={styles.td}>{birthday_date}</td>
							<td className={styles.td}>{phone_number}</td>
							<td className={styles.td}>{address}</td>
							<button
								className={styles.btn}
								onClick={() => setDeletedId(id)}
								type="button"
							>
								-
							</button>
							<button className={styles.btn} type="button">
								+
							</button>
						</tr>
					),
				)}
		</tb>
	);

	return (
		<>
			{loading && <p>...Loading</p>}
			{error && <p className={styles.error}>{error}</p>}
			<TableHeader />
			<div>{content}</div>
		</>
	);
};
export default Table;
