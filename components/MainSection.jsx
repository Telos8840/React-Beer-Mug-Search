import React, { Component, PropTypes } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import {GridList} from 'material-ui/GridList';
import BeerCard from './BeerCard';
import Snackbar from 'material-ui/Snackbar';

const styles = {
	root: {
		marginLeft: 150,
		marginRight: 150,
		marginTop: 40
	},
	loading: {
		display: 'flex',
		justifyContent: 'center',
		marginTop: 100
	}
};


class MainSection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFetching: false,
			beer: undefined,
			open: false
		};

	}

	componentWillReceiveProps(nextProps) {
		if (nextProps) {
			this.setState({
				isFetching: nextProps.isFetching,
				beer: nextProps.beer,
				open: !nextProps.beer
			})
		}
	}

	loading = () => {
		return (
			<div style={styles.loading}>
				<CircularProgress size={80} thickness={5} />
			</div>
		);

	};

	saveFavorite = (item) => {
		this.props.actions.saveFavorite(item);

	};

	removeFavorite = (item) => {
		this.props.actions.removeFavorite(item);
	};

	render() {
		if (this.state.isFetching)
			return this.loading();

		let beers = this.state.beer;

		return (
			<div style={styles.root}>
				{<GridList
					cols={3}
					cellHeight='auto'
					padding={25}>
					{
						beers ? (
								beers.map((beer) => (
									<BeerCard
										key={beer.id}
										beer={beer}
										saveFavorite={this.saveFavorite}
										removeFavorite={this.removeFavorite}
										showFav={true}/>
								)))
							: (
								<div></div>
							)

					}
				</GridList>}
				<Snackbar
					open={this.state.open}
					message="No beers found for that search"
					autoHideDuration={4000}
				/>
			</div>
		);
	}
}

MainSection.propTypes = {
	beer: PropTypes.array,
	actions: PropTypes.object.isRequired,
	isFetching: PropTypes.bool.isRequired
};

export default MainSection;
