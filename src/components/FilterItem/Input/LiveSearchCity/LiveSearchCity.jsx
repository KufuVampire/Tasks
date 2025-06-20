import { getAreaById, getAreas } from '@/api';
import { Checkbox } from '@/components';
import { SEARCH_PARAMS } from '@/constants';
import { useSearchParamsStore } from '@/store';
import { cn } from '@/utils';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';

const key = SEARCH_PARAMS.area;

function extractRegionsAndCities({ areas }) {
	const regions = [...areas];
	const cities = regions.flatMap(({ areas }) => areas);
	return regions.concat(cities);
}

export const LiveSearchCity = ({ value }) => {
	const [areas, setAreas] = useState([]);
	const [checkedAreas, setCheckedAreas] = useState([]);
	const [isLoading, setLoading] = useState(true);

	const { searchParams, searchParamsString, setSearchParamsString } =
		useSearchParamsStore();

	const isValueMoreThanTwo = value.length > 2;

	useEffect(() => {
		(async () => {
			if (isValueMoreThanTwo) {
				const data = await getAreas();

				const extractedAreas = extractRegionsAndCities(data[0]);
				const filteredAreas = extractedAreas.filter((area) =>
					area.name.toLowerCase().includes(value.toLowerCase())
				);

				setAreas(filteredAreas);
			} else {
				const areasIds = searchParams.getAll(key);
				const data = areasIds.map((areaId) => {
					return getAreaById(areaId);
				});

				const areas = await Promise.all(data);

				setCheckedAreas(areas.reverse());
			}
			setLoading(false);
		})();
	}, [value, searchParamsString]);

	const handleClick = (e) => {
		const checkbox = e.target.closest('input');

		if (!checkbox) return;
		if (!checkbox.checked && !searchParams.has(key)) return;

		const value = checkbox.dataset.value ? checkbox.dataset.value : '';

		if (!checkbox.checked && searchParams.has(key, value)) {
			searchParams.delete(key, value);
			setSearchParamsString(searchParams.toString());
			return;
		}

		searchParams.append(key, value);
		setSearchParamsString(searchParams.toString());
	};

	if (!isLoading && isValueMoreThanTwo && checkedAreas.length > 0) {
		const filteredWithoutCheckedAreas = areas.filter(
			(area) =>
				!checkedAreas.some((checkedArea) => checkedArea.name === area.name)
		);
		const mergedArr = checkedAreas.concat(filteredWithoutCheckedAreas);

		return (
			<ul 
				aria-label='Выпадающий список городов и регионов'
				onClick={handleClick}
				className={cn([styles.list], {
					[styles.active]: isValueMoreThanTwo && areas.length > 0,
				})}>
				{mergedArr.map((area, i) => (
					<li
						className={styles.item}
						key={i}>
						<Checkbox
							data-value={area.id}
							text={area.name}
							checked={searchParams.getAll(key).includes(area.id)}
						/>
					</li>
				))}
			</ul>
		);
	}

	return (
		<>
			{!isLoading && isValueMoreThanTwo && (
				<ul
					onClick={handleClick}
					className={cn([styles.list], {
						[styles.active]: isValueMoreThanTwo && areas.length > 0,
					})}>
					{areas.map((area, i) => (
						<li
							className={styles.item}
							key={i}>
							<Checkbox
								data-value={area.id}
								text={area.name}
								checked={searchParams.getAll(key).includes(area.id)}
							/>
						</li>
					))}
				</ul>
			)}
			{!isLoading && !isValueMoreThanTwo && checkedAreas.length > 0 && (
				<ul
					onClick={handleClick}
					className={cn([styles.list, styles.active])}>
					{checkedAreas.map((area, i) => (
						<li
							className={styles.item}
							key={i}>
							<Checkbox
								data-value={area.id}
								text={area.name}
								checked
							/>
						</li>
					))}
				</ul>
			)}
		</>
	);
};
