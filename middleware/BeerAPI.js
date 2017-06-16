/**
 * Created by Saul on 2/5/17.
 */

import _ from 'lodash';
const KEY = "key=084e27a550a6bd4fc6e1c0d2961409e0&";
const API_ROOT = `http://api.brewerydb.com/v2/`;

class BeerAPI {
	static searchBeer(beer) {
		beer = encodeURI(beer);

		return fetch(API_ROOT + `search?${KEY}type=beer&q=${beer}`).then(response =>
			response.json().then(json => {
				if (!response.ok) {
					return Promise.reject(json)
				}

				let data = json.data;
				_.each(data, d => {
					_.extend(d, {isFavorite: false})
				});

				return Promise.resolve(data);
			}));

	}
}

export default BeerAPI;