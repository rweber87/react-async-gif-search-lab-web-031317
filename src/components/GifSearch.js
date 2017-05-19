import React from 'react';


const API = 'http://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE'
class GifSearch extends React.Component {

	constructor(){
		super()

		this.state = {
			search: ''
		}
	}

	searchTerm(ev){
		this.setState({
			search: ev.target.value
		})
	}

	results(ev){
		ev.preventDefault()
		this.props.handleSearch(this.state.search)
		this.setState({
			search: ''
		})
	}

	
	

	render() {
		return(
			<div>
				<form onSubmit={this.results.bind(this)}>
					<input type="text" value={this.state.search} onChange={this.searchTerm.bind(this)}/>
					<input type="submit" />
				</form>
			</div>
		)
	}
}
export default GifSearch