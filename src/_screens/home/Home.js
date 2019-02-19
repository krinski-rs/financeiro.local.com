import React from 'react';
import PropTypes from 'prop-types';
import {
	BrowserRouter as Router,
	Route,
	Link
} from "react-router-dom";
import Chuchu from './Chuchu';
import Public from './Public';

class Home extends React.Component {
	render() {
		return (
			    <Router>
			<div>
				<ul>
		          <li>
		            <Link to="/home/public">Public Page</Link>
		          </li>
		          <li>
		            <Link to="/home/chuchu">Protected Page</Link>
		          </li>
		          </ul>
				<Route exact={true} path="/home/chuchu" component={Chuchu} />
				<Route exact={true} path="/home/public" component={Public} />
			</div>
			    </Router>
    	);
	}
}

Home.propTypes = {
	title: PropTypes.string
};

Home.defaultProps = {
		title: "Home"
};

export default Home;