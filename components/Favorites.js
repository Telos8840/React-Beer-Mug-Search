/**
 * Created by Saul on 2/8/17.
 */
import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import BeerCard from '../components/BeerCard';

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	item: {
		marginTop: 15,
		marginBottom: 15,
		width: '95%',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
};

class Favorites extends Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false,
			favorites: [],
			beer: {}
		};
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps) {
			this.setState({
				favorites: nextProps.favorites
			})
		}
	}


	openDialog = (beer) => {
		this.setState({
			open: true,
			beer: beer
		});
	};

	handleClose = () => {
		this.setState({open: false});
	};

	handleRequestDelete = (beer) => {
		this.props.removeFavorite(beer);
		this.props.updateList(beer);

	};

	render() {
		const actions = [
			<FlatButton
				label="Close"
				primary={true}
				keyboardFocused={true}
				onTouchTap={this.handleClose}
			/>
		];

		return (
			<div>
				<AppBar title="Favorites" />
				<div style={styles.container}>
					{
						this.state.favorites.map(fav => {
							return (
								<Chip key={fav.id}
									onRequestDelete={() => this.handleRequestDelete(fav)}
									onTouchTap={() => this.openDialog(fav)}
									  style={styles.item}>
									<Avatar src={fav.labels ? fav.labels.icon : require("../images/beer-icon.png")} />
									{fav.name}
								</Chip>
							);

						})
					}
				</div>
				<Dialog
					actions={actions}
					modal={false}
					open={this.state.open}
					onRequestClose={this.handleClose}>
					<BeerCard beer={this.state.beer} showFav={false}/>
				</Dialog>
			</div>
		);
	}
}

Favorites.propTypes = {
	favorites: PropTypes.array.isRequired,
	removeFavorite: PropTypes.func.isRequired
};

export default Favorites;