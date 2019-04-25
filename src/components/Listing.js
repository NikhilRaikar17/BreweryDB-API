import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Listing.css';

class Listing extends React.Component {

  state = {
    data_beer: []   
  }

  // LifeCycle method of react which fetches the data and loads it after the initial render.
  componentDidMount() {
    this.getbeer();
  }

  getbeer = () => {
    fetch('/data')
      .then(res => res.json())
      .then(data => {
        this.setState({ data_beer: data.data }) // Setting the state as soon as the request is processed.
      }
      )
  }

  render() {
    const data = this.state.data_beer;
    return (
        <div className="container-fluid body">
          <nav class="navbar navbar-expand navbar-dark mb-3 static-top" style={{ backgroundColor: "rgb(255,250,250)" }}>
            <img src="img-responsive brewery-img" src={require('../img/brewerydb.png')} style={{ height: 50 }} alt="BewerbyDB" />
          </nav>
          <div id="wrapper">
            <div id="content-wrapper">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="#">Beer</a>
                </li>
                <li class="breadcrumb-item">Listings</li>
              </ol>
              <div className="table-responsive table-striped">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col" data-toggle="tooltip" data-placement="top" title="Name of the beer">Beer Name <FontAwesomeIcon icon="beer"/></th>
                      <th scope="col" data-toggle="tooltip" data-placement="top" title="Beer's alcohol by volume">Beer-abv<FontAwesomeIcon icon="glass-whiskey"/></th>
                      <th scope="col" data-toggle="tooltip" data-placement="top" title="Beer's International Bitterness units">Beer-ibu<FontAwesomeIcon icon="wine-glass"/></th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.data_beer.length > 0 &&
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
    )
  }

  // This function loops in and lists all beers.
  renderListing = (data) => data.map((element) => {
    const link = `/details/${element.id}`
    return (
      <tr>
        <th scope="row"><a className="reference-links" href={link} target="_blank">{element.name}</a></th>
        <td>{element.abv}</td>
        <td>{element.ibu}</td>
      </tr>
    )
  })

}

export default Listing;