import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineAddHomeWork } from 'react-icons/md';
import { BsHouseDash } from 'react-icons/bs';
import { FiLogOut } from 'react-icons/fi';
import { RiAccountPinCircleLine } from 'react-icons/ri';
import { Horizon } from 'diamante-sdk-js';

const navbarItems = [
	{
		icon: <MdOutlineAddHomeWork className='text-lg md:text-[25px] z-50' />,
		label: 'Buy',
		link: '/properties',
	},
	{
		icon: <BsHouseDash className='text-lg md:text-[25px] z-50' />,
		label: 'Sell',
		link: '/listing',
	},
	{
		icon: <RiAccountPinCircleLine className='text-lg md:text-[25px] z-50' />,
		label: 'Profile',
		link: '/dashboard',
	},
];

function Navbar() {
	const server = new Horizon.Server('https://diamtestnet.diamcircle.io');
	const location = useLocation();
	const [selected, setSelected] = useState('');
	const [balance, setBalance] = useState(0);
	const fetchDiamBalance = async () => {
		const response = await server.loadAccount(
			'GDLTWSQEYSFSJNJJ35ZVCWT7DIMED2C56HRSUGR3CKT4UPD45CPUZBZ7'
		);
		// console.log(response.balances[0].balance);
		setBalance(response.balances[0].balance);
	};

	if (location.pathname === '/login') {
		return null;
	}

	const address_len = localStorage.getItem('public_address').length;

	const handleItemClick = (label) => {
		if (label === 'Buy' || label === 'Sell') {
			setSelected(label);
		}
	};

	useEffect(() => {
		fetchDiamBalance();
	}, []);

	return (
		<div className='w-screen h-[80px] flex fixed top-0 mb-[100px] items-center justify-between px-4 md:px-8 backdrop-blur'>
			<Link to={'/'}>
				<div className='flex items-center'>
					<img
						src='/dslogo.png'
						alt='logo'
						className='object-cover'
						width={100}
					/>
					<h2 className='text-lg md:text-[25px] font-bold text-[#7065F0] ml-2 md:ml-4 hidden md:block overflow-hidden'>
						DiamEstate
					</h2>
				</div>
			</Link>

			<div className='flex items-center justify-center ml-auto md:ml-0'>
				<div className='flex gap-4 ml-4 md:ml-8'>
					{navbarItems.map((item, index) => (
						<Link to={item.link} key={index}>
							<div
								onClick={() => handleItemClick(item.label)}
								className={`relative flex items-center gap-2 text-black md:px-4 md:py-2 bg-transparent hover:bg-[#d7d4fc] hover:p-2 md:hover:px-4 md:hover:py-3 hover:rounded-[10px] hover:text-[#6559f1] transition-all cursor-pointer ${
									(item.label === 'Buy' || item.label === 'Sell') &&
									selected === item.label
										? 'bg-[#d7d4fc] p-2 md:px-4 md:py-3 rounded-[10px] text-[#6559f1] transition-all'
										: ''
								}`}
							>
								{item.icon}
								<h2 className='font-bold hidden md:block'>{item.label}</h2>
							</div>
						</Link>
					))}
				</div>
			</div>
			<div className='text-black flex gap-x-2 border-2 border-black rounded-full p-1'>
				<div
					onClick={() => {
						navigator.clipboard.writeText(
							localStorage.getItem('public_address')
						);
						alert('Copied to clipboard!');
					}}
					className='cursor-pointer border-1 bg-gray-300 rounded-full p-2'
				>
					{localStorage.getItem('public_address').slice(0, 5) +
						'...' +
						localStorage
							.getItem('public_address')
							.slice(address_len - 5, address_len - 1)}
				</div>

				<div className='flex items-center gap-2 border-1 bg-gray-300 rounded-full p-2'>
					<img src='/diam.png' width={50} alt='' />
					<p>{Number.parseInt(balance)} DIAMS</p>
				</div>
			</div>

			<div className='flex gap-3 items-center ml-2'>
				<Link onClick={() => localStorage.clear()} to={'/login'}>
					<div className='relative flex items-center gap-2 text-white md:px-4 md:py-3 bg-[#7065F0] hover:bg-[#d7d4fc] hover:p-2 md:hover:px-4 md:hover:py-3 rounded-[10px] hover:text-[#7065F0] transition-all cursor-pointer'>
						<FiLogOut className='text-lg md:text-[25px] z-50' />
						<h2 className='font-bold hidden md:block'>Logout </h2>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Navbar;
