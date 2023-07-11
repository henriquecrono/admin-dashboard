import { useEffect, useMemo, useState } from 'react';

import MaterialReactTable, { type MRT_ColumnDef } from 'material-react-table';

import { IconButton } from '@mui/material';

import PetsIcon from '@mui/icons-material/Pets';

import { Link } from 'react-router-dom';

import PokemonController from '../../controllers/pokemon/PokemonController';

import { IPokemon } from '../../interfaces/pokemon';

import capitalizeFirstLetter from '../../utils/functions/capitalize';

export default function PokemonList() {
	const [tableData, setTableData] = useState<IPokemon[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	const pokemonController = new PokemonController();

	const columns = useMemo<MRT_ColumnDef<IPokemon>[]>(
		() => [
			{
				accessorKey: 'link',
				header: 'Infos',
				size: 50,
				Cell: ({ row }) => (
					<Link
						to={`/pokemon/${row.original.name}`}
						rel="noopener noreferrer"
						target="_blank"
					>
						<IconButton aria-label="delete">
							<PetsIcon />
						</IconButton>
					</Link>
				),
			},
			{
				accessorKey: 'name',
				header: 'Name',
				Cell: ({ cell }) => capitalizeFirstLetter(cell.getValue() as string),
			},
		],
		[]
	);

	useEffect(() => {
		getPokemon();
	}, []);

	const getPokemon = async () => {
		setIsLoading(true);

		const { error, result } = await pokemonController.list();

		if (!error) {
			setTableData(result.results);
		}

		setIsLoading(false);
	};

	return (
		<main className="min-h-screen-64-pixel flex flex-col p-3">
			<div className="flex flex-col lg:items-center lg:flex-1">
				<div className="flex flex-row flex-wrap items-center justify-between align-center lg:w-4/5">
					<h1>Pokémon</h1>
				</div>

				<div className="flex flex-col align-center lg:w-4/5 mt-5">
					<MaterialReactTable
						columns={columns}
						data={tableData}
						initialState={{ density: 'compact' }}
						state={{
							isLoading,
						}}
					/>
				</div>
			</div>
		</main>
	);
}
