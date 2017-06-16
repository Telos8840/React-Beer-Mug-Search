/**
 * Created by Saul on 2/5/17.
 */
import {
	REQUEST_BEER,
	RECEIVE_BEER,
	SAVE_FAVORITE,
	BEER_FAILURE,
	REMOVE_FAVORITE
} from '../actions/beer';

const compareBeer = (beer, action) => {
	return beer.id === action.id;
};

function beerReducer(state = {isFetching: false, beer: [], favorites: []}, action) {
	switch (action.type) {
		case REQUEST_BEER:
			return Object.assign({}, state, {isFetching: true});
		case RECEIVE_BEER:
			return Object.assign({}, state, {beer: action.beer, isFetching: false});
		case SAVE_FAVORITE:
			const exists = state.favorites.some((item) => compareBeer(item, action.favorite));
			return Object.assign({}, state, exists ?
					{favorites: state.favorites} :
					{favorites: [...state.favorites, action.favorite]});
		case BEER_FAILURE:
			return Object.assign({}, state, {error: action.error, isFetching: false});
		case REMOVE_FAVORITE:
			const index = state.favorites.findIndex((x) => x.id === action.favorite.id);
			return Object.assign({}, state, exists ?
				{favorites: state.favorites} :
				{favorites: [
					...state.favorites.slice(0, index),
					...state.favorites.slice(index + 1)
				]});
		default:
			return state
	}
}

export default function Beer(state = {isFetching: false, beer: [], favorites: []}, action) {
	return {
		payload: beerReducer(state.payload, action)
	}
}