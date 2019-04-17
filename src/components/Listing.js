import React from "react";
import axios from "axios";

class Listing extends React.Component {

    state = {
      data_beer: []
    }

  componentWillMount(){
    this.getbeer();
  }

  getbeer = () => {
    axios({
      url: 'https://sandbox-api.brewerydb.com/v2/beers/?key=36a9fd1572ee14caebcaf7834eda6905',
      method: 'get',
      
    }).then(data => {
      // console.log(data.data.data) 
      this.setState({data_beer: data.data.data})

      }
    )

  }

  render(){
    const data = this.state.data_beer;

    return(
    <div>  
        {this.state.data_beer.length> 0 && 
          this.renderListing(data)
        }
        </div>

    )
  }

  renderListing = (data) => data.map((element) => {
      const link = `/details/${element.id}`
      return (
        <li><a href={link} target="_blank" >{element.name}</a></li>
      )
  })

}

export default Listing;