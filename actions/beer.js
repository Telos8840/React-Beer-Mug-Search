/**
 * Created by Saul on 2/5/17.
 */

import BeerAPI from "../middleware/BeerAPI";

export const REQUEST_BEER = 'REQUEST_BEER';
export const RECEIVE_BEER = 'RECEIVE_BEER';
export const BEER_FAILURE = 'BEER_FAILURE';
export const SAVE_FAVORITE = 'SAVE_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export function requestBeer() {
	return {
		type: REQUEST_BEER
	}
}

export function receiveBeer(json) {
	return {
		type: RECEIVE_BEER,
		beer: json
	}
}

export function beerFailure(error) {
	return {
		type: BEER_FAILURE,
		error: error
	}
}

export function saveFavorite(beer) {
	return {
		type: SAVE_FAVORITE,
		favorite: beer
	}
}

export function removeFavorite(beer) {
	return {
		type: REMOVE_FAVORITE,
		favorite: beer
	}
}

export function searchBeer(beer) {
	return dispatch => {
		dispatch(requestBeer());
		return BeerAPI.searchBeer(beer).then(beer => {
			dispatch(receiveBeer(beer));
		}).catch(error => {
			dispatch(beerFailure(error));
		});
	};
}