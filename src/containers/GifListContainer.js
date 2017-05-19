import React from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends React.Component{

	constructor(){
		super()
		this.state = {
			gifs: []
		}
	}

	handleSearch(searchTerm){
		const URL = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC`
		fetch(URL, {mode: 'cors'})
		.then(res => res.json())
		.then(data => this.setState({
			gifs: data.data.slice(0,3).map(gif => gif.embed_url)
		}))
		this.setState({
			gifs: []
		})
	}

	render(){
		return(
			<div>
				<GifSearch handleSearch={this.handleSearch.bind(this)} />
				<GifList gifs={this.state.gifs}/>
			</div>
		)
	}
}

export default GifListContainer