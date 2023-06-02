import Image from 'next/image';
import styles from './page.module.css';
import { landingbg } from '@/public/imgs';

export default function Home() {
	return (
		<main className={styles.main}>
			<Image
				className={styles.img}
				src={landingbg}
				alt={''}
				width={900}
				height={500}
				priority={true}
			/>
			<div className={styles.content}>
				<div className={styles.path}>
					<h2>Hi, I&apos;m Alfonso</h2>
					<p>
						I am a Freelance <span>Frontend React developer</span>
					</p>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, corporis eligendi
						exercitationem fugit harum ipsam iusto minima necessitatibus nemo neque nulla officiis
						porro provident quibusdam, quis ratione repellat repudiandae rerum, tempora ullam?
					</p>
				</div>
			</div>
		</main>
	);
}
