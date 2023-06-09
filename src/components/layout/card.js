import { Link } from 'react-router-dom'

const Card = ({ pokemon }) => {
	let id = pokemon.id
	let typeClass = ''

	if ((id >= 10) & (id < 100)) {
		id = '0' + id
	}
	if (id < 10) {
		id = '00' + id
	}

	{
		pokemon.type.map((type, i) => {
			typeClass += ` type-${type.toLowerCase()}`
		})
	}

	return (
		<div className='col-3 my-3'>
			<Link className='text-decoration-none' key={pokemon.id} to={{ pathname: `/pokemon/${pokemon.id}` }}>
				<div className={`card m-1 row flex-row ${typeClass}`}>
					<div className='bg-pokeball'></div>
					<span className='pokemon-id'>{`#${id}`}</span>
					<h2>{pokemon.nom}</h2>
					<div className='card-title col-6'>
						<div className='pokemon-types mt-1'>
							{pokemon.type.map((type, i) => {
								return (
									<span key={i} className='type'>
										{type}
									</span>
								)
							})}
						</div>
					</div>
					<div className='pokemon-image col-6'>
						{/* <img alt="bulbasaur" src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`}/> */}
						<img alt='bulbasaur' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} />
						{/* <img alt="bulbasaur" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"/> */}
					</div>
				</div>
			</Link>
		</div>
	)
}

export default Card
