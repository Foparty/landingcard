import Link from 'next/link';
import styles from './Navbar.module.css';

const links = [
	{
		id: '01',
		title: 'Home',
		url: '#',
	},
	{
		id: '03',
		title: 'Blog',
		url: '#',
	},
	{
		id: '04',
		title: 'Contact',
		url: '#',
	},
	{
		id: '05',
		title: 'Shop',
		url: '#',
	},
];
export const Navbar = () => {
	return (
		<nav className={styles.nav}>
			{links.map((item) => (
				<Link className={styles.links} key={item.id} href={item.url}>
					{item.title}
				</Link>
			))}
		</nav>
	);
};
