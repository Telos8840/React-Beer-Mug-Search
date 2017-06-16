import React, { PropTypes, Component } from 'react';
import BeerInput from './BeerInput';
import AppBar from 'material-ui/AppBar';

const defaultStyle = {
	display: 'flex',
	justifyContent: 'center'
};


class Header extends Component {
	handleEnter(text) {
		if (text.length !== 0) {
			this.props.searchBeer(text);
		}
	}

	handleToggle() {
		this.props.handleToggle()
	}

	render() {
		return (
            <header className="header">
                <AppBar title="Collide Beer Glass Finder" onLeftIconButtonTouchTap={this.handleToggle.bind(this)}/>
                <div style={defaultStyle}>
                    <BeerInput onEnter={this.handleEnter.bind(this)} />
                </div>
            </header>
		);
	}
}

Header.propTypes = {
	searchBeer: PropTypes.func.isRequired
};

export default Header;
