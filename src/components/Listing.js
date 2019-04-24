import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Listing.css';

class Listing extends React.Component {

    state = {
      data_beer: []
    }

  componentDidMount(){
    this.getbeer();   
  }

  getbeer = () => {
    fetch('/data')
    .then(res => res.json())
    .then(data => {
      console.log(data.data)
      this.setState({data_beer: data.data})
      }
    )

  }

  render(){
    const data = this.state.data_beer;
    return(
      <html lang="en"><head>
      <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
      <meta charset="utf-8"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content="" />
      <meta name="author" content="" />
  
      <title>Beer Listings</title>
      </head>

    <body id="page-top">
      <noscript>
        <div class="bg-danger text-white text-center" style="width: 100%;">
          <i class="fa fa-exclamation-triangle"></i> &nbsp;<b>JavaScript Required.</b> This page
          doesn't work properly without JavaScript enabled.
        </div>
      </noscript>
      <div className="container-fluid"> 
      <nav class="navbar navbar-expand navbar-dark mb-3 static-top" style={{backgroundColor: "rgb(255,250,250)"}}>
      <img src="img-responsive brewery-img" src={require('../img/brewerydb.png')} style={{height: 50}} alt="BewerbyDB" />
      </nav>
      <div id="wrapper">    
      <div id="content-wrapper">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="">Beer Listings</a>
        </li>
        <li class="breadcrumb-item">Overview</li>
      </ol>
    {/* <div className="text-center" style={{}}>
    <img className="img-responsive brewery-img" src={require('../img/B.png')} />
    </div> */}
    <div className="table-responsive table-striped">
    <table className="table table-hover">
    <thead>
    <tr>
      <th scope="col">Beer Name <FontAwesomeIcon icon="beer"/></th>
      <th scope="col">Beer-abv<FontAwesomeIcon icon="glass-whiskey"/></th>
      <th scope="col">Beer-ibu</th>
    </tr>
    </thead>
    <tbody>          
    {this.state.data_beer.length > 0 && 
      this.renderListing(data)
    }
    </tbody>
    </table>
    </div>
      <div className="container my-auto">
        <div className="copyright text-center my-auto">
          <span>Copyright © BreweryDB</span>
        </div>
      </div>   
    </div>
    </div>
    </div>
    </body>
    </html>
    )
  }

  renderListing = (data) => data.map((element) => {
      const link = `/details/${element.id}`
      return (
      <tr>
        <th scope="row"><a className="reference-links" href={link} target="_blank" style={{marginRight:5,color:'#ed5441'}}>{element.name}</a></th>
        <td>{element.abv}</td>
        <td>{element.ibu}</td>
      </tr>               
      )
  })

}

export default Listing;