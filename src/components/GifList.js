import React from 'react'

function GifList(props) {
	const listItems = props.gifs.map( (gif,i) => <li key={i}><embed src={gif} /></li>)
		
		return (
			<ul>
				{listItems}
			</ul>
		)
}

export default GifList