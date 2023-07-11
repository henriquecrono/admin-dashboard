import PokemonRepository from '../../repositories/pokemon/PokemonRepository';

export default class PokemonController {
	repository = new PokemonRepository();

	async list() {
		const response = await this.repository.list();
		const error = response.status !== 200;
		return { error, result: response.data };
	}
}
