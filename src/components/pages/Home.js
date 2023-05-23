import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

import Card from '../layout/card'
import '../../style/components/Card.css'
import pokemons from '../data/pokemon-json'

const Home = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    let test = searchParams.get("query");
    let allPokemons = pokemons;

    if(test){
        allPokemons = allPokemons.find(pokemon => {
            return pokemon.nom.toLocaleLowerCase().includes(test);
        });
        if(!Array.isArray(allPokemons) && allPokemons){
            allPokemons = [allPokemons];
        }
    }
	return (
		<div className='px-1 py-1 mt-5'>
			<h1 className='title d-flex justify-content-center mb-4'>Liste des pokémons</h1>
            <div className='row w-100'>
                {allPokemons ? (
                    allPokemons.map((pokemon) => {
                        return <Card key={pokemon.id} pokemon={pokemon}></Card>
                    })
                ) : (
                    <p></p>
                )}

            </div>
            {/* <CardTest></CardTest> */}
		</div>
	)
}

// const Test = () => {
// 	const { id } = useParams()

// 	if (id) {
// 		var pro = project.find((obj) => {
// 			return obj.id == id
// 		})

// 		return <Projet key={pro.id} nom={pro.nom} img={pro.img.logo} />
// 	} else {
// 		return (
// 			<div className='row justify-content-center mt-3 w-100'>
// 				{project.map((element) => {
// 					return <Projet key={element.id} nom={element.nom} img={element.img.logo} id={element.id} />
// 				})}
// 			</div>
// 		)
// 	}
// }

export default Home
