import pokemons from '../data/pokemon-json'

import { useParams } from "react-router-dom";

const CaracPokemon = () => {
    const { id } = useParams();

    // Recherche de l'objet de projet correspondant à l'ID
    const pokemon = pokemons.find((pokemon) => pokemon.id === parseInt(id));

    if (!pokemon) {
        return <div>Pokemon non trouvé</div>;
    }

    const { nom, type, pv, stats, vitesse } = pokemon;

    return (
        <div className='container d-flex justify-content-center'>
            <div className='card p-4'>
                <h2 className=''>{nom}</h2>

                <div>Type : {type}</div>
                <div>PV : {pv}</div>
                <div>Attaque : {stats.attaque}</div>
                <div>Att Spé : {stats.att_spe}</div>
                <div>Défense : {stats.defense}</div>
                <div>Déf Spé : {stats.def_spe}</div>
                <div>Vitesse : {vitesse}</div>

            </div>
        </div>
    );
};

export default CaracPokemon;