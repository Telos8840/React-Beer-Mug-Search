/**
 * Created by Saul on 2/5/17.
 */
import React, { Component, PropTypes } from 'react';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Favorite from 'material-ui/svg-icons/action/favorite';
import IconButton from 'material-ui/IconButton';
import {red500} from 'material-ui/styles/colors';
import BeerGlass from './BeerGlass';

class BeerCard extends Component {
	constructor(props) {
		super(props);

		this.state = {
			beer: props.beer
		};
	}

	favClicked = () => {
		this.props.beer.isFavorite = !this.props.beer.isFavorite;

		!this.props.beer.isFavorite ?
			this.props.removeFavorite(this.props.beer) :
			this.props.saveFavorite(this.props.beer);
	};

	render() {
		let abv = this.props.beer.abv ? `${this.props.beer.abv}% ABV` : "No ABV Available";
		return (
			<Card style={{height:'100%'}}>
				<CardHeader
					title={this.props.beer.name}
					subtitle={abv}
					avatar={this.props.beer.labels ? this.props.beer.labels.icon : require("../images/beer-icon.png")}>

					{
						this.props.showFav &&
						<IconButton
							tooltip="Save to favorites"
							style={{float: 'right'}} onClick={this.favClicked}>
							{
								this.props.beer.isFavorite ?
									<Favorite color={red500}/> :
									<FavoriteBorder color={red500}/>
							}
						</IconButton>
					}

				</CardHeader>
				<BeerGlass glassId={this.props.beer.glasswareId}/>
				<CardTitle
					title={this.props.beer.style ? this.props.beer.style.shortName : "No Beer Style Provided"} subtitle="" />
				<CardText>
					{
						this.props.beer.description ? this.props.beer.description : "No Description Available"
					}
				</CardText>
			</Card>
		);
	}

}

BeerCard.propTypes = {
	beer: React.PropTypes.object.isRequired,
	saveFavorite: React.PropTypes.func,
	removeFavorite: React.PropTypes.func,
	showFav: React.PropTypes.bool.isRequired
};

export default BeerCard;