import React from"react";

class Titles extends React.Component{

	constructor(props) {
		super(props)
	}


	render () {
	    return (
	    	<div>
	    	renderDetail(this.props)</div>
	    )
  	}

	renderDetail = (detail) => {
		console.log(detail)
		// 	detail.map((d)=> {
		// 		return (
		// 			<h1>d.title</h1>
		// 			<p>d.body</p>
		// 		)
		// 	})
		// }
	}

};

export default Titles;