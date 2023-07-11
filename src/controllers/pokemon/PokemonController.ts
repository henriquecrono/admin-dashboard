import PokemonRepository from '../../repositories/pokemon/PokemonRepository';

export default class PokemonController {
	repository = new PokemonRepository();

	async list() {
		const response = await this.repository.list();
		const error = response.status !== 200;
		return { error, result: response.data };
	}

	async get(name: string | undefined) {
		const response = await this.repository.get(name);
		const error = response.status !== 200;
		return { error, result: response.data };
	}
}
