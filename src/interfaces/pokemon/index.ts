export interface IPokemon {
	link: string;
	name: string;
	types: IPokemonTypeItem[];
	sprites: ISprites;
	abilities: IPokemonAbilityItem[];
}

interface IPokemonTypeItem {
	slot: number;
	type: IPokemonType;
}

export interface IPokemonType {
	name: string;
}

export interface ISprites {
	front_default: string;
}

interface IPokemonAbilityItem {
	slot: number;
	ability: IPokemonAbility;
	is_hidden: boolean;
}

export interface IPokemonAbility {
	name: string;
}
