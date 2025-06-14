import styles from './styles.module.css'
import { cn } from '@/utils'

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

	const showLeftDots = leftSiblingsIndex > 2;
	const showRightDots = rightSiblingsIndex < totalPages - 1;

	if (!showLeftDots && showRightDots) {
		const leftItemsCount = 2 + 2 * siblings;
		const leftRange = range(1, leftItemsCount + 1);
		return [...leftRange, "...", totalPages];
	}

	if (showLeftDots && !showRightDots) {
		const rightItemsCount = 2 + 2 * siblings;
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
		siblings = 1,
	} = props;

	const pagination = returnPaginationRange(totalPages, currentPage, siblings);

	const changePage = (e) => {
		const btn = e.target.closest('button');

		if (!btn) return;

		const isPage = btn.dataset.page !== '...';
		const pageNumber = isPage ? Number(btn.dataset.page) : currentPage;
		setPage(pageNumber);
	}

	if (totalPages <= 1) return null;

	return (
		<div className={styles.pagination} aria-label='Пагинация'>
			<ul onClick={changePage} className={styles.pagination__list}>
				{
					pagination.map((page, i) => (
						<li key={i} className={styles.page}>
							<button data-page={page} disabled={disabled || page === '...'} className={cn([], {
								[styles.active]: page === currentPage,
								[styles.dots]: page === '...',
								[styles.btn]: page != '...'
							})}>
								{page}
							</button>
						</li>
					))
				}
			</ul>
		</div>
	)
};
