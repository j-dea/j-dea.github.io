import React from 'react';
import Header from "./components/layout/Header";
import {Outlet} from "react-router-dom";
import Footer from "./components/layout/Footer";

export default function App() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}

