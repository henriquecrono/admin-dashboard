import { useEffect, useState } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import Swal from 'sweetalert2';

import { CircularProgress } from '@mui/material';

import PokemonController from '../../controllers/pokemon/PokemonController';

import { IPokemon } from '../../interfaces/pokemon';

import capitalizeFirstLetter from '../../utils/functions/capitalize';

export default function PokemonDetails() {
	const [isLoading, setIsLoading] = useState(true);
	const [pokemon, setPokemon] = useState({} as IPokemon);

	const { name } = useParams<{ name: string }>();

	const navigate = useNavigate();

	const pokemonController = new PokemonController();

	useEffect(() => {
		getPokemon();
	}, []);

	const getPokemon = async () => {
		setIsLoading(true);

		const { error, result } = await pokemonController.get(name);

		setIsLoading(false);

		if (error) {
			return Swal.fire({
				icon: 'error',
				confirmButtonText: 'Fechar',
				text: 'Pokémon não encontrado',
			}).then(() => navigate('/pokemon'));
		}

		setPokemon(result);
	};

	const displayLoader = () => {
		return (
			<main className="min-h-screen-64-pixel flex justify-center items-center">
				<CircularProgress />
			</main>
		);
	};

	const template = () => {
		return (
			<main className="min-h-screen-64-pixel flex flex-col p-3">
				<div className="flex flex-col lg:items-center lg:flex-1">
					<div className="flex flex-col align-center lg:w-4/5">
						<h1>{capitalizeFirstLetter(pokemon.name)}</h1>

						<div className="mt-3">
							<div className="flex flex-col items-start">
								<div className="lg:flex justify-between w-full">
									<p className="mt-0">
										<img src={pokemon.sprites.front_default} />
									</p>
								</div>

								<div className="lg:flex justify-between w-full">
									<p className="mt-0">
										<strong>Types: </strong>
										{pokemon.types.map((type, index) => {
											return (
												<>
													<span>{capitalizeFirstLetter(type.type.name)}</span>
													{pokemon.types[index + 1] && '/'}
												</>
											);
										})}
									</p>
								</div>

								<div className="lg:flex justify-between w-full">
									<p className="mt-0">
										<strong>Abilities: </strong>
										{pokemon.abilities.map((ability, index) => {
											return (
												<>
													<span>
														{capitalizeFirstLetter(ability.ability.name)}
														{ability.is_hidden && <> (Hidden)</>}
													</span>
													{pokemon.abilities[index + 1] && '/'}
												</>
											);
										})}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		);
	};

	return isLoading ? displayLoader() : template();
}
