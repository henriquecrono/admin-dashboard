import { Routes, Route } from 'react-router-dom';

import { AuthenticatedLayout } from './components/AuthenticatedLayout';

import Home from './pages/home';

export default function RoutesComponent() {
	return (
		<Routes>
			<Route element={<AuthenticatedLayout />}>
				<Route path="/" element={<Home />} />
			</Route>
		</Routes>
	);
}
