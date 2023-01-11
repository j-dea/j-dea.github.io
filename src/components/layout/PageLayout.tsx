import React from "react";

type Props = {
	children: React.ReactNode;
	className?: string;
}
export default function PageLayout({children, className = ''}: Props) {
	return (
		<main className={`flex-1 ${className}`}>
			{children}
		</main>
	);
}