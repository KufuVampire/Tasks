import styles from './styles.module.css'

export const RenderingDescriptionFromProps = ({description}) => {
	return (
		<>
			<h3 className={styles.title}>Описание</h3>
			<p className={styles.description} dangerouslySetInnerHTML={{ __html: description }} />
		</>
	)
}
