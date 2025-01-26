import styles from './styles.module.css'

export const FilterItem = ({ iconName, text, isInput }) => {
	const locationIcon = <svg className={styles.icon__left} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M8.87557e-05 5.98934C-0.0021161 6.12448 0.0368048 6.25708 0.111691 6.36959C0.186577 6.48209 0.293891 6.56918 0.419404 6.6193L6.8198 9.1798L9.38035 15.5807C9.42982 15.7045 9.51527 15.8106 9.62566 15.8854C9.73606 15.9601 9.86634 16 9.99966 16H10.0103C10.1453 15.9979 10.2765 15.9548 10.3865 15.8765C10.4965 15.7981 10.5801 15.6883 10.6263 15.5614L15.9594 0.89569C16.0031 0.776382 16.0117 0.647083 15.9843 0.523022C15.957 0.39896 15.8947 0.285302 15.8049 0.195433C15.7151 0.105564 15.6015 0.0432268 15.4775 0.0157628C15.3534 -0.0117012 15.2241 -0.00314809 15.1048 0.0404146L0.438737 5.37339C0.311786 5.41967 0.201878 5.5034 0.123552 5.61351C0.0452263 5.72362 0.00217346 5.85491 8.87557e-05 5.99001V5.98934Z" fill="#5C89CE" />
	</svg>;

	const briefcaseIcon = <svg className={styles.icon__left} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M5.75 1.5H10.25C10.3875 1.5 10.5 1.6125 10.5 1.75V3H5.5V1.75C5.5 1.6125 5.6125 1.5 5.75 1.5ZM4 1.75V3H2C0.896875 3 0 3.89687 0 5V8H6H10H16V5C16 3.89687 15.1031 3 14 3H12V1.75C12 0.784375 11.2156 0 10.25 0H5.75C4.78438 0 4 0.784375 4 1.75ZM16 9H10V10C10 10.5531 9.55313 11 9 11H7C6.44688 11 6 10.5531 6 10V9H0V13C0 14.1031 0.896875 15 2 15H14C15.1031 15 16 14.1031 16 13V9Z" fill="#5C89CE" />
	</svg>;

	const filterSolidIcon = <svg className={styles.icon__left} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M0.121712 1.71562C0.327962 1.27813 0.765462 1 1.24984 1H14.7498C15.2342 1 15.6717 1.27813 15.878 1.71562C16.0842 2.15312 16.0217 2.66875 15.7155 3.04375L9.99984 10.0281V14C9.99984 14.3781 9.78734 14.725 9.44671 14.8937C9.10609 15.0625 8.70296 15.0281 8.39984 14.8L6.39984 13.3C6.14671 13.1125 5.99984 12.8156 5.99984 12.5V10.0281L0.281087 3.04062C-0.0220383 2.66875 -0.0876633 2.15 0.121712 1.71562Z" fill="#5C89CE" />
	</svg>

	const Icons = {
		location: locationIcon,
		briefcase: briefcaseIcon,
		filterSolid: filterSolidIcon
	}

	if (isInput) {
		return (
			<li className={styles.item}>
				<form className={styles.form}>
					<div className={styles.wrapper}>
						{Icons[iconName]}
						<input className={styles.input} type="text" placeholder={text} />
					</div>
				</form>
			</li>
		)
	}

	return (
		<li className={styles.item}>
			<form className={styles.form}>
				<div className={styles.wrapper}>
					{Icons[iconName]}
					{text}
				</div>
				<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.icon__right}>
					<path d="M8.78076 5.71963C9.07373 6.0126 9.07373 6.48838 8.78076 6.78135L4.28076 11.2813C3.98779 11.5743 3.51201 11.5743 3.21904 11.2813C2.92607 10.9884 2.92607 10.5126 3.21904 10.2196L7.18936 6.24932L3.22139 2.279C2.92842 1.98603 2.92842 1.51025 3.22139 1.21728C3.51436 0.924316 3.99014 0.924316 4.28311 1.21728L8.78311 5.71729L8.78076 5.71963Z" fill="black" />
				</svg>
			</form>
		</li>
	)
}
