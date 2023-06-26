import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { PROBLEMS } from '../shared/problems';


export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS,
    problems: PROBLEMS
};

export const Reducer = (state = initialState, action) => {
    return state;
};