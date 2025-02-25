import { useEffect } from "react"

import styles from './styles.module.css'

function range(start, end, step = 1) {
	const arr = [];

	for (let i = start; i < end; i += step) {
		arr.push(i);
	}

	return arr;
}

function returnPaginationRange(totalPages, currentPage, siblings) {
	const totalPagesInArray = 7 + siblings;

	if (totalPagesInArray >= totalPages) {
		return range(1, totalPages + 1);
	}
	const leftSiblingsIndex = Math.max(currentPage - siblings, 1);
	const rightSiblingsIndex = Math.min(currentPage + siblings, totalPages);

	const showLeftDots = leftSiblingsIndex > 3;
	const showRightDots = rightSiblingsIndex < totalPages - 2;

	if (!showLeftDots && showRightDots) {
		const leftItemsCount = 3 + 2 * siblings;
		const leftRange = range(1, leftItemsCount + 1);
		return [...leftRange, "...", totalPages];
	}

	if (showLeftDots && !showRightDots) {
		const rightItemsCount = 3 + 2 * siblings;
		const rightRange = range(totalPages - rightItemsCount + 1, totalPages + 1);
		return [1, '...', ...rightRange];
	}

	const middleRange = range(leftSiblingsIndex, rightSiblingsIndex + 1);
	return [1, '...', ...middleRange, '...', totalPages];
}

export const Pagination = (props) => {
	const {
		totalPages,
		currentPage,
		setPage,
		disabled = false,
		defaultPage = 1,
		siblings = 1,
	} = props;

	const pagination = returnPaginationRange(totalPages, currentPage, siblings);

	const changePage = (e) => {
		if (!(e.target instanceof HTMLElement)) return;

		const btn = e.target.closest('button');

		if (!btn) return;
		if (!(btn instanceof HTMLButtonElement)) return;

		const isPage = btn.dataset.page !== '...';
		const pageNumber = isPage ? Number(btn.dataset.page) : currentPage;
		setPage(pageNumber);
	}

	useEffect(() => {
		setPage(defaultPage)
	}, [defaultPage, setPage])

	if (totalPages <= 1) return null;

	return (
		<div className={styles.pagination}>
			<ul onClick={changePage} className={styles.pagination__list}>
				{
					pagination.map((page, i) => (
						<li key={i} className={styles.page}>
							<button data-page={page} disabled={disabled || page === '...'} className={`${styles.btn} ${page === currentPage ? styles.active : ''} ${page === '...' ? styles.dots : ''}`}>
								{page}
							</button>
						</li>
					))
				}
			</ul>
		</div>
	)
};
