import styles from "./table-header.module.scss";

const TableHeader = () => {
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
		</>
	);
};
export default TableHeader;
