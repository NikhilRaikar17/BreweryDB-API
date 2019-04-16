import React from "react";
import Listbeer from './Listbeer';
import {Switch,Route} from 'react-router-dom';


const Main =() => (
	<Switch>
	<Route exact path="/listbeer" component={Listbeer} />
	</Switch>
)

export default Main;