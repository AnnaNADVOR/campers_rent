import { useState, useEffect, useRef } from 'react';
import sprite from '../../assets/icons/sprite.svg';
import {
	SelectContainer,
	OptionsList,
	MenuContainer,
	SelectButton,
	SelectInput,
	SelectInputLabel,
} from './SortedSelect.styled';

const SortedSelect = ({
	setSortOption,
	sortOption,
	setSearchParams,
	searchParams,
	setPage,
	setAdverts,
}) => {
	const [showMenu, setShowMenu] = useState(false);
	const menuRef = useRef(null);
	const buttonRef = useRef(null);

	let params = {};
	for (const [key, value] of searchParams.entries()) {
		params[key] = value;
	}

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	useEffect(() => {
		const onEscClick = event => {
			if (event.code === 'Escape') {
				setShowMenu(false);
			}
		};

		const handleClickOutside = event => {
			if (
				menuRef.current &&
				!menuRef.current.contains(event.target) &&
				!buttonRef.current.contains(event.target)
			) {
				setShowMenu(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		window.addEventListener('keydown', onEscClick);

		return () => {
			window.removeEventListener('keydown', onEscClick);
			window.removeEventListener('mousedown', handleClickOutside);
		};
	}, [setShowMenu]);

	const handleSort = event => {
		switch (event.target.value) {
			case 'cheap':
				setSortOption(event.target.value);
				setPage(1);
				setAdverts([]);
				setSearchParams({
					...params,
					sortBy: 'price',
					order: 'asc',
				});
				toggleMenu();
				break;
			case 'expensive':
				setSortOption(event.target.value);
				setPage(1);
				setAdverts([]);
				setSearchParams({
					...params,
					sortBy: 'price',
					order: 'desc',
				});
				toggleMenu();
				break;
			case 'lowRating':
				setSortOption(event.target.value);
				setPage(1);
				setAdverts([]);
				setSearchParams({
					...params,
					sortBy: 'rating',
					order: 'asc',
				});
				toggleMenu();
				break;
			case 'highRating':
				setSortOption(event.target.value);
				setPage(1);
				setAdverts([]);
				setSearchParams({
					...params,
					sortBy: 'rating',
					order: 'desc',
				});
				toggleMenu();
				break;
			default:
		}
	};

	return (
		<SelectContainer>
			<SelectButton onClick={toggleMenu} ref={buttonRef}>
				Sort by
				{(sortOption === 'cheap' ||
					(params.sortBy === 'price' && params.order === 'asc')) && (
					<span>Price: Low to High</span>
				)}
				{(sortOption === 'expencive' ||
					(params.sortBy === 'price' && params.order === 'desc')) && (
					<span>Price: High to Low</span>
				)}
				{(sortOption === 'lowRating' ||
					(params.sortBy === 'rating' && params.order === 'asc')) && (
					<span>Rating: Low to High</span>
				)}
				{(sortOption === 'highRating' ||
					(params.sortBy === 'rating' && params.order === 'desc')) && (
					<span>Rating: High to Low</span>
				)}
				<svg>
					<use href={`${sprite}#sorted`}></use>
				</svg>
			</SelectButton>
			{showMenu && (
				<MenuContainer ref={menuRef}>
					<OptionsList>
						<li>
							<SelectInputLabel htmlFor="cheap">
								<SelectInput
									type="radio"
									name="sort"
									value="cheap"
									onClick={handleSort}
								/>
								<div>Price: Low to High</div>
							</SelectInputLabel>
						</li>
						<li>
							<SelectInputLabel htmlFor="expencive">
								<SelectInput
									type="radio"
									name="sort"
									value="expensive"
									onClick={handleSort}
								/>
								<div>Price: High to Low</div>
							</SelectInputLabel>
						</li>
						<li>
							<SelectInputLabel htmlFor="lowRating">
								<SelectInput
									type="radio"
									name="sort"
									value="lowRating"
									onClick={handleSort}
								/>
								<div>Rating: Low To High</div>
							</SelectInputLabel>
						</li>
						<li>
							<SelectInputLabel htmlFor="highRating">
								<SelectInput
									type="radio"
									name="sort"
									value="highRating"
									onClick={handleSort}
								/>
								<div>Rating: High to Low</div>
							</SelectInputLabel>
						</li>
					</OptionsList>
				</MenuContainer>
			)}
		</SelectContainer>
	);
};

export default SortedSelect;
