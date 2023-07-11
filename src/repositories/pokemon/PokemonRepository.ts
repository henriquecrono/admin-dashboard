import axios from '../../utils/http/customAxios';

export default class PokemonRepository {
	async list() {
		try {
			const response = await axios().get('/pokemon?limit=151');
			return response;
		} catch (error: any) {
			return error.response;
		}
	}

	async get(name: string | undefined) {
		try {
			const response = await axios().get(`/pokemon/${name}`);
			return response;
		} catch (error: any) {
			return error.response;
		}
	}
}
