'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
	const [position, setPosition] = useState({ top: '70%', left: '70%' });
	const [confirm, setConfirm] = useState(false);

	const moveButton = () => {
		const buttonWidth = 720; // Assume the button's width is 100px
		const buttonHeight = 400; // Assume the button's height is 50px

		const randomTop = Math.random() * (window.innerHeight - buttonHeight);
		const randomLeft = Math.random() * (window.innerWidth - buttonWidth);

		setPosition({
			top: `${randomTop}px`,
			left: `${randomLeft}px`,
		});
	};

	return (
		<main className='flex h-screen flex-col items-center justify-center w-screen relative'>
			<Image
				src={'/images/chocolate-hills.jpg'}
				width={1200}
				height={1200}
				alt='chocolate-hills'
				className='absolute object-cover w-full h-full'
			/>
			<Image
				src={'/images/tarsiers.jpg'}
				width={400}
				height={400}
				alt='chocolate-hills'
				className='absolute object-cover w-72 h-72 left-20 top-20 shadow-xl rounded-full'
			/>
			<Image
				src={'/images/lapulapu.jpg'}
				width={400}
				height={400}
				alt='lapu-hills'
				className='absolute object-cover w-96 h-96 left-20 bottom-20 shadow-xl rounded-full'
			/>
			<Image
				src={'/images/BISU-LOGO.png'}
				width={400}
				height={400}
				alt='chocolate-hills'
				className='absolute object-cover w-60 h-60 right-60 bottom-20 shadow-xl rounded-full'
			/>
			<Image
				src={'/images/calamay.png'}
				width={400}
				height={400}
				alt='chocolate-hills'
				className='absolute object-cover w-96 h-96 right-20 top-20 shadow-xl rounded-full'
			/>
			<Image
				src={'/images/ilovebohol.jpg'}
				width={400}
				height={400}
				alt='chocolate-hills'
				className='absolute object-cover w-72 h-72 left-[40%] top-10 shadow-xl rounded-full'
			/>
			<div className='max-w-2xl w-full h-fit rounded-xl shadow-xl bg-white bg-opacity-50 backdrop-blur-md p-10 flex flex-col gap-10'>
				{!confirm ? (
					<h2 className=' text-stone-800 font-bold text-2xl'>
						Will you be my <span className='text-4xl text-red-600'>DATE</span> on August 26, 2024 at 6PM
					</h2>
				) : (
					<h2 className='text-stone-900 font-bold text-2xl text-center'>
						Congratulations! You will be notified shortly. Thank you for your participation.
					</h2>
				)}
				{!confirm && (
					<div className='flex w-full justify-around'>
						<button className='font-bold py-8 px-16 rounded-xl bg-green-600 text-4xl' onClick={() => setConfirm(true)}>
							Yes
						</button>
						<span></span>
						<button
							style={{
								top: position.top,
								left: position.left,
								transform: 'translate(-50%, -50%)',
							}}
							className='absolute font-bold  z-10 py-4 px-8 rounded-xl bg-red-600 text-2xl'
							onMouseEnter={moveButton}
						>
							No
						</button>
					</div>
				)}
			</div>
		</main>
	);
}
