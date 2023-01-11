import {Link} from "react-router-dom";

export default function Header() {
	return (
		<header className="relative flex flex-col items-center justify-center">
			<a className="absolute top-0 right-0 p-2" href="https://github.com/j-dea" target="_blank" rel="noreferrer">
				Github
			</a>
			<Link to="/">
				<img src="/images/icons/logo192.png" alt="logo" />
			</Link>
			<nav className="flex gap-2">
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
			</nav>
		</header>
	);
}