import './globals.css';
import styles from './Layout.module.css';
import { Navbar } from '@/components/Navbar/Navbar';

export const metadata = {
	title: 'Fontend React developer | Alfonso Martín García',
	description: 'Afortable web projects to bust your business',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={styles.body}>
				<div className={styles.wrapper}>
					<header>
						<Navbar />
					</header>
					<main>{children}</main>
				</div>
			</body>
		</html>
	);
}
