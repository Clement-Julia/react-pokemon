import pokemons from '../data/pokemon-json'

import { useParams } from "react-router-dom";

const CaracPokemon = () => {
    const { id } = useParams();

    // Recherche de l'objet de projet correspondant à l'ID
    const pokemon = pokemons.find((pokemon) => pokemon.id === parseInt(id));

    if (!pokemon) {
        return <div className='text-center mt-5 titre'>Pokemon non trouvé</div>;
    }

    const { nom, type, pv, stats, vitesse } = pokemon;

    var idPokemon = id
    if (id > 10 & id < 100) {
        idPokemon = '0' + idPokemon
    }
    if (id < 10) {
        idPokemon = '00' + idPokemon
    }

    var lien = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + idPokemon + ".png";
    var backColor = "type-" + type[0].toLowerCase()
    var cardClass = "card cardPokemon p-4 " + backColor

    return (
        <div className='container d-flex justify-content-center my-4'>
            <div className={cardClass}>
                <div className='cardHeader'>
                    <div className='nomPokemon me-5'>{nom}</div>
                    <div className='pv'><span className="petit me-2">PV</span>{pv}</div>
                </div>
                <div className='cardImg'>
                    <img className='imgPokemon' src={lien}></img>
                </div>
                <div className='hrPerso'></div>
                <div className='cardFooter'>
                    <div className='typePokemon'>{type.join(', ')}</div>
                    <div className="statsPokemon mt-3 mb-2">
                        <div>Attaque : {stats.attaque}</div>
                        <div>Défense : {stats.defense}</div>
                        <div>Att Spé : {stats.att_spe}</div>
                        <div>Déf Spé : {stats.def_spe}</div>
                    </div>
                    <div className='vitessePokemon'>Vitesse : {vitesse}</div>
                </div>
            </div>
        </div>
    );
};

export default CaracPokemon;