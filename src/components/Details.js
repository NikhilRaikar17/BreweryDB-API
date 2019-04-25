import React from "react";
import './Details.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Details extends React.Component {
  state = {
    data_beer_details: []
  }

  // LifeCycle method of react which fetches the data and loads it after the initial render.
  componentDidMount() {
    this.getbeerdetails();
  }

  // Fetch the specific data and load it after the initial render.
  getbeerdetails = () => {
    const id = this.props.match.params.id;
    fetch(`/details/${id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ data_beer_details: data.data }) // Setting the state as soon as the request is processed. 
      }
      )

  }

  render() {
    return (
      <div className="container-fluid body">
        <nav className="navbar navbar-expand navbar-dark mb-3 static-top" style={{ backgroundColor: "rgb(255,250,250)" }}>
          <img src="img-responsive brewery-img" src={require('../img/brewerydb.png')} style={{ height: 50 }} alt="BewerbyDB" />
        </nav>
        <div id="wrapper">
          <div id="content-wrapper">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Beer</a>
              </li>
              <li className="breadcrumb-item">Details</li>
            </ol>
          </div>
        </div>
        <div>
          <div className="page-heading-two">
            {
              this.state.data_beer_details.name && <h1 className="name-heading">
              <FontAwesomeIcon icon="blender" /> {this.state.data_beer_details.name} </h1>
            }
          </div>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col" data-toggle="tooltip" data-placement="top" title="Contents of the beer">Beer Information </th>
                <th scope="col" data-toggle="tooltip" data-placement="top" title="Proportions of contents present per serving">Average Values</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="name-heading" data-toggle="tooltip" data-placement="top" title="Value represents how much of alcohol is present in each brew"> Alcohol By Volume </td>
                <td>
                  {
                    this.state.data_beer_details.abv &&
                    <span>{this.state.data_beer_details.abv}</span>
                  }
                </td>
              </tr>
              <tr>
                <td className="name-heading" data-toggle="tooltip" data-placement="top" title="Tells us how bitter the beer is on the scale of 0 to 100"> International Bitterness Units </td>
                <td>
                  {
                    this.state.data_beer_details.ibu &&
                    <span>{this.state.data_beer_details.ibu}</span>
                  }
                </td>
              </tr>
              <tr>
                <td className="name-heading" data-toggle="tooltip" data-placement="top" title="Tells us whether the beer is organic"> IsOrganic </td>
                <td>
                  {
                    this.state.data_beer_details.isOrganic &&
                    <span>{this.state.data_beer_details.isOrganic}</span>
                  }
                </td>
              </tr>
              <tr>
                <td className="name-heading" data-toggle="tooltip" data-placement="top" title="Year the beer was first started"> Year </td>
                <td>
                  {
                    this.state.data_beer_details.year &&
                    <span>{this.state.data_beer_details.year}</span>
                  }
                </td>
              </tr>
              <tr>
                <td className="name-heading" data-toggle="tooltip" data-placement="top" title="Labels the beer is represented in or a logo which represents this beer"> Labels </td>
                <td>
                  {
                    this.state.data_beer_details.labels &&
                    <span><img src={this.state.data_beer_details.labels.icon} /></span>
                  }
                </td>
              </tr>
              <tr>
                <td className="name-heading" data-toggle="tooltip" data-placement="top" title=""> Status </td>
                <td>
                  {
                    this.state.data_beer_details.status &&
                    <span>{this.state.data_beer_details.status}</span>
                  }
                </td>
              </tr>
              <tr>
                <td className="name-heading" data-toggle="tooltip" data-placement="top" title="Gives us little more information about the beer"> Glass Data </td>
                <td>
                  {
                    this.state.data_beer_details.glass &&
                    <span> <span className="related-glass-data-styling" data-toggle="tooltip" data-placement="top" title="ID of this beer"> ID: </span>  {this.state.data_beer_details.id}
                    <span className="related-glass-data-styling" data-toggle="tooltip" data-placement="top" title="Name of the beer represented in our database"> Name: </span>  {this.state.data_beer_details.name}
                    <span className="related-glass-data-styling" data-toggle="tooltip" data-placement="top" title="Creation date"> CreatedDate: </span> {this.state.data_beer_details.createDate} </span>
                  }
                </td>
                </tr>
            </tbody>
          </table>      
        </div>
      </div>
      <div className="container my-auto">
        <div className="copyright text-center my-auto">
            <span>Copyright © BreweryDB</span>
        </div>
      </div>
    </div>


    )
  }
}
export default Details;