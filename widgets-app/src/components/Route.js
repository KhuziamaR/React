import { useEffect, useState } from 'react';
const Route = ({ path, children }) => {
	const [ currrentPath, setCurrentPath ] = useState(window.location.pathname);
	useEffect(() => {
		const onLocationChange = () => {
			setCurrentPath(window.location.pathname);
		};
		window.addEventListener('popstate', onLocationChange);
		return () => {
			window.removeEventListener('popstate', onLocationChange);
		};
	}, []);
	return currrentPath === path ? children : null;
};
export default Route;
