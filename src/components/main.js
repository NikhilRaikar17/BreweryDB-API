import React from "react";
import axios from "axios"

class Main extends React.Component {


  constructor(props){
    super(props)
    this.state = {dataR: []}
  }

  componentWillMount(){
    this.getbeer();
     // this.setState({data: this.getbeer()})
  }

  getbeer = () => {
    axios({
      url: 'https://sandbox-api.brewerydb.com/v2/beers/?key=36a9fd1572ee14caebcaf7834eda6905',
      method: 'get',
      
    }).then(data => {
     // console.log(data.data.data) 
      this.setState({dataR: data.data.data})

      }
    )

  }

  render(){
    const data = this.state.dataR;

    return(
    <div>  
        {this.state.dataR.length> 0 && 
          this.renderListing(data)
        }
        </div>

    )
  }

  renderListing = (data) => data.map((element) => {
      return (
        <li><a href="" target="_blank">{element.name}</a></li>
      )
  })

}

export default Main;