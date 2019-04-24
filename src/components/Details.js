import React from "react";
import axios from "axios";

class Details extends React.Component {  
	state = {
      data_beer_details: []
    }
  
  componentDidMount(){
    this.getbeerdetails();
  }

  getbeerdetails = () => {  	
    const id = this.props.match.params.id;
    fetch(`/details/${id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data.data)
      this.setState({data_beer_details: data.data})
      }
    )

  }
  
	render(){
		const data = this.state.data_beer_details;
		return(
		<div>  
	    <p>Name:{this.state.data_beer_details.name}</p>
	    <p>Abv:{this.state.data_beer_details.abv}</p>
	    <p>Ibu:{this.state.data_beer_details.ibu}</p>
	    <p>Organic:{this.state.data_beer_details.isOrganic}</p>
	    <p>Year:{this.state.data_beer_details.year}</p>
	    <p>Status:{this.state.data_beer_details.status}</p>
	    </div>

	  )
	}
}
export default Details;