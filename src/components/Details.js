import React from "react";
import './Details.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
      // console.log(data.data.labels.icon)
      this.setState({data_beer_details: data.data})
      // console.log(data_beer_details.labels.icon)
      }
    )

  }
  
	render(){
		return(        
        <div className="container-fluid"> 
          <nav className="navbar navbar-expand navbar-dark mb-3 static-top" style={{backgroundColor: "rgb(255,250,250)"}}>
          <img src="img-responsive brewery-img" src={require('../img/brewerydb.png')} style={{height: 50}} alt="BewerbyDB" />
          </nav>
          <div id="wrapper">    
          <div id="content-wrapper">
          <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="">Beer Listings</a>
          </li>
          <li className="breadcrumb-item">Details</li>
        </ol>
        </div>
        </div>
        <div>  
        <div className ="page-heading-two"> 
        {this.state.data_beer_details.name && <h1 className="name-heading"><FontAwesomeIcon icon="blender"/> {this.state.data_beer_details.name} </h1>}
        </div>
        <div className="table-responsive">
        <table className="table">
        <thead>
        <tr>
          <th scope="col">Beer Details </th>
          <th scope="col">Beer Information</th>
        </tr>
        </thead>
        <tbody> 
        <tr>
          <td className="name-heading"> Alcohol By Volume </td>
          <td>         
            {
              this.state.data_beer_details.abv && 
                <span>{this.state.data_beer_details.abv}</span>
            }
          </td>
          </tr>
          <tr>
          <td className="name-heading"> International Bitterness Units </td>
          <td>         
            {
              this.state.data_beer_details.ibu &&
                <span>{this.state.data_beer_details.ibu}</span>
            }
          </td>
          </tr>
          <tr>
          <td className="name-heading"> IsOrganic </td>
          <td>    
            {
              this.state.data_beer_details.isOrganic && 
                <span>{this.state.data_beer_details.isOrganic}</span>
            }
          </td>
          </tr>
          <tr>
          <td className="name-heading"> Year </td>
          <td>
            {
              this.state.data_beer_details.year && 
                <span>{this.state.data_beer_details.year}</span>
            }
          </td>
          </tr>
          <tr>
          <td className="name-heading"> Labels </td>
          <td>
            {
              this.state.data_beer_details.labels && 
                <span><img src={this.state.data_beer_details.labels.icon}/></span>
            }
          </td>
          </tr>
          <tr>
          <td className="name-heading"> Status </td>
          <td>
            {
              this.state.data_beer_details.status && 
              <span>{this.state.data_beer_details.status}</span>
            }
          </td>
          </tr>
          <tr>
          <td className="name-heading"> Glass Data </td>
          <td>
            {
              this.state.data_beer_details.glass && 
              <span>ID: {this.state.data_beer_details.id}, Name: {this.state.data_beer_details.name}, CreatedDate: {this.state.data_beer_details.createDate}</span>
            }
          </td>
          </tr>
        </tbody>
        </table>
        </div>
        </div>
        </div>
       

	  )
	}
}
export default Details;