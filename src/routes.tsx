import { Routes, Route } from 'react-router-dom';

import { AuthenticatedLayout } from './components/AuthenticatedLayout';

import Home from './pages/home';

import { PokemonList, PokemonDetails } from './pages/pokemon';

export default function RoutesComponent() {
	return (
		<Routes>
			<Route element={<AuthenticatedLayout />}>
				<Route path="/" element={<Home />} />
			</Route>

			<Route element={<AuthenticatedLayout />}>
				<Route path="/pokemon" element={<PokemonList />} />
			</Route>

			<Route element={<AuthenticatedLayout />}>
				<Route path="/pokemon/:name" element={<PokemonDetails />} />
			</Route>
		</Routes>
	);
}
