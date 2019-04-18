import React from "react";
import Listing from './Listing';
import Details from './Details';
import {Switch,Route} from 'react-router-dom';


const Main =() => (
	<Switch>
	<Route exact path="/" component={Listing} />
	<Route path="/details/:id" component={Details} />
	</Switch>
)

export default Main;