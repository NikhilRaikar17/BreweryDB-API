import React from "react";
import axios from "axios";



class Details extends React.Component {  
	state = {
      data_beer_details: []
    }
  
  componentWillMount(){
    this.getbeerdetails();
  }

  
  getbeerdetails = () => {  	
  	const id = this.props.match.params.id;

    axios({
      url: `https://sandbox-api.brewerydb.com/v2/beer/${id}?key=36a9fd1572ee14caebcaf7834eda6905`,
      method: 'get',
      
    }).then(data => {
      // console.log(data.data.data.name) 
      this.setState({data_beer_details: data.data.data})

      }
    )

  }
	render(){
		const data = this.state.data_beer_details;
		return(
    	<div>  
        {this.state.data_beer_details.name && <p> {this.state.data_beer_details.name} </p>
        }
        </div>

	  )
	}
}
export default Details;