import React from 'react';
import ReactDOM from 'react-dom/client';
import {createHashRouter, RouterProvider} from "react-router-dom";
import {printLog} from "./util/log";
import reportWebVitals from './reportWebVitals';
import App from './App';
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import About from "./pages/About";
import './index.css';

const router = createHashRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <NotFound />,
		children: [
			{ index: true, element: <Home /> },
			{ path: '/about', element: <About /> },
		]
	}
])

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

reportWebVitals();
printLog();