import React from "react";
import axios from "axios";

class Listing extends React.Component {

    state = {
      data_beer: []
    }

  componentDidMount(){
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
    <div class="container"> 
    <table class="table table-hover">
    <thead>
    <tr>
      <th scope="col">Beer Name</th>
      <th scope="col">Beer-abv</th>
      <th scope="col">Beer-ibu</th>
    </tr>
    </thead>
    <tbody>
              
     {this.renderListing(data)}
    
    </tbody>
    </table>
    </div>

    )
  }

  renderListing = (data) => data.map((element) => {
      const link = `/details/${element.id}`
      return (
      <tr>
        <th scope="row"><a href={link} target="_blank" style={{marginRight:5}}>{element.name}</a></th>
        <td>{element.abv}</td>
        <td>{element.ibu}</td>
      </tr>               
      )
  })

}

export default Listing;