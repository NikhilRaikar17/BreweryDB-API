import React from "react";
import axios from "axios";
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
      this.setState({data_beer: data.data.data})
      }
    )

  }

  render(){
    const data = this.state.data_beer;

    return(
    <div className="container-fluid"> 
    <div className="text-center" style={{}}>
    <img className="img-responsive brewery-img" src={require('../img/B.png')} />
    </div>
    <div className="table-responsive">
    <table className="table table-hover">
    <thead>
    <tr>
      <th scope="col"><i className="fas fa-beer" style={{width:20}}></i>Beer Name</th>
      <th scope="col">Beer-abv</th>
      <th scope="col">Beer-ibu</th>
    </tr>
    </thead>
    <tbody>              
     {this.renderListing(data)}
    </tbody>
    </table>
    </div>
      <div className="container my-auto">
        <div className="copyright text-center my-auto">
          <span>Copyright © BreweryDB</span>
        </div>
      </div>   
    </div>
    )
  }

  renderListing = (data) => data.map((element) => {
      const link = `/details/${element.id}`
      return (
      <tr>
        <th scope="row"><a className="nounderline" href={link} target="_blank" style={{marginRight:5}}>{element.name}</a></th>
        <td>{element.abv}</td>
        <td>{element.ibu}</td>
      </tr>               
      )
  })

}

export default Listing;