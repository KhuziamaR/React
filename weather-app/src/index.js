import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { lat: null, long: null, errorMessage: '' };
	}

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				this.setState({ lat: position.coords.latitude, long: position.coords.longitude });
			},
			(err) => {
				this.setState({ errorMessage: err.message });
			}
		);
	}

	render() {
		if (this.state.errorMessage && !this.state.lat) {
			return (
				<div>
					{/* <h3>Latitude: {this.state.lat}</h3> */}
					<h4>Error: {this.state.errorMessage}</h4>
					{/* <h3>Longitude: {this.state.long}</h3> */}
				</div>
			);
		}
		if (!this.state.errorMessage && this.state.lat) {
			return <SeasonDisplay lat={this.state.lat} />;
		}
		return <Spinner message="Please Accept Location Request" />;
	}
}

ReactDOM.render(<App />, document.querySelector('#root'));
