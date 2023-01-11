import PageLayout from "../components/layout/PageLayout";
import {useEffect, useState} from "react";
import Markdown from "../components/Markdown";

export default function About() {
	const [about, setAbout] = useState('');
	useEffect(() => {
		fetch('https://raw.githubusercontent.com/j-dea/.github/main/profile/README.md')
			.then(res => res.text())
			.then(setAbout)
		;
	}, [])
	return (
		<PageLayout>
			<Markdown text={about} />
		</PageLayout>
	);
}