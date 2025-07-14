import styles from './styles.module.css'

export const Company = ({ employer, address }) => {

	return (
		<div className={styles.company}>
			{employer.logo_urls && (
				<img src={employer.logo_urls.original} alt="logo" className={styles.logo} />
			)}
			<h2 className={styles.company__name}>{employer.name}</h2>
			{
				address && (
					<address className={styles.company__address}>
						{`г. ${address.city}, ул. ${address.street}, д. ${address.building}`}
					</address>
				)
			}
		</div>
	)
}
