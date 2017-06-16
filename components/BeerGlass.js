/**
 * Created by Saul on 2/5/17.
 */
import React from 'react';
import {CardMedia, CardTitle} from 'material-ui/Card';
import _ from 'lodash';

const glasses = [
	{
		id : 0,
		img : require("../images/glasses.jpg"),
		name : "Glass Info Not Provided"
	},
	{
		id : 1,
		img : require("../images/flute.jpg"),
		name : "Flute"
	},
	{
		id : 2,
		img : require("../images/goblet.jpg"),
		name : "Goblet"
	},
	{
		id : 3,
		img : require("../images/mug.jpg"),
		name : "Mug"
	},
	{
		id : 4,
		img : require("../images/pilsner.jpeg"),
		name : "Pilsner"
	},
	{
		id : 5,
		img : require("../images/pint.jpg"),
		name : "Pint"
	},
	{
		id : 6,
		img : require("../images/snifter.jpg"),
		name : "Snifter"
	},
	{
		id : 7,
		img : require("../images/stange.jpg"),
		name : "Stange"
	},
	{
		id : 8,
		img : require("../images/tulip.jpg"),
		name : "Tulip"
	},
	{
		id : 9,
		img : require("../images/weizen.png"),
		name : "Weizen"
	},
	{
		id : 10,
		img : require("../images/oversized_wine_glass.jpeg"),
		name : "Oversized Wine Glass"
	},
	{
		id : 13,
		img : require("../images/weizen.jpg"),
		name : "Willi"
	},
	{
		id : 14,
		img : require("../images/thistle.jpg"),
		name : "Thistle"
	}
];

const BeerGlass = (props) => {
	let id = props.glassId ? parseInt(props.glassId) : 0;
	let glass = _.find(glasses, {id: id});
	return (
		<CardMedia
			overlay={<CardTitle title={glass.name} />}>
			<img src={glass.img} style={{}} />
		</CardMedia>
	);

};

export default BeerGlass;