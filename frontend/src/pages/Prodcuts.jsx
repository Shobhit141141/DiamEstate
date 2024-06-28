import { useState } from 'react';

const priceRange = [0, 50, 100, 500, 1000, 10000];
const categories = [
	'Electronics',
	'Furniture',
	'Clothing',
	'Vehicles',
	'Stationery',
	'Accessories',
	'Others',
];
const Prodcuts = () => {
	const [priceValue, setPriceValue] = useState(0);
	return (
		<section>
			{/* Filters and Sorting header */}
			<div className='flex w-full items-center justify-between'>
				<div className='flex gap-5'>
					<div className=''>
						<input
							type='range'
							min={0}
							max='100'
							value={priceValue}
							className='range range-xs'
							step='20'
							onChange={(e) => setPriceValue(e.target.value)}
						/>
						<div className='flex w-full justify-between px-2 text-xs'>
							{priceRange.map((price, index) => (
								<span key={index}>${price}</span>
							))}
						</div>
					</div>
					<select className='select select-bordered select-sm w-full max-w-xs'>
						<option disabled selected>
							Categories
						</option>
						{categories.map((category, index) => (
							<option key={index}>{category}</option>
						))}
					</select>
				</div>
				<div>
					<span>Sort by | </span>
					<select className='select select-bordered select-sm'>
						<option disabled selected>
							Price
						</option>
						<option>Low to High</option>
						<option>High to Low</option>
						<option>Newest arrivals</option>
					</select>
				</div>
			</div>
		</section>
	);
};

export default Prodcuts;
