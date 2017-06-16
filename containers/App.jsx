import React, { Component, PropTypes } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as BeerActions from '../actions/beer';
import Drawer from 'material-ui/Drawer';
import Favorites from '../components/Favorites';
import _ from 'lodash';

// For Customization Options, edit  or use
// './src/material_ui_raw_theme_file.jsx' as a template.
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../src/material_ui_raw_theme_file'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
	}

	handleToggle = () => this.setState({open: !this.state.open});

	updateList = (item) => {
		let match = _.find(this.props.beer, i => {return i.id === item.id});
		match.isFavorite = !match.isFavorite;
	};

	render() {
		const { beer, favorites, actions, isFetching } = this.props;
		return (
            <div>
              <MuiThemeProvider muiTheme={theme}>
                <div>
	                <Drawer
		                docked={false}
		                width={300}
		                open={this.state.open}
		                onRequestChange={(open) => this.setState({open})}>
		                <Favorites favorites={favorites} removeFavorite={actions.removeFavorite} updateList={this.updateList}/>
	                </Drawer>
                  <Header searchBeer={actions.searchBeer} clearBeer={actions.clearBeer} handleToggle={this.handleToggle}/>
                  <MainSection beer={beer} isFetching={isFetching} actions={actions} />
                </div>
              </MuiThemeProvider>
            </div>
		);
	}
}

App.propTypes = {
	beer: PropTypes.array,
	actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
	console.log('state', state);
	return {
		beer: state.beer.payload.beer,
		favorites: state.beer.payload.favorites,
		isFetching: state.beer.payload.isFetching
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(BeerActions, dispatch)
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
