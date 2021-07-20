import { normalizedReviews } from '../../fixtures';
import { arrToMap } from '../utils';

export const ADD_REVIEW = 'ADD_REVIEW';

export const addReview = (review, resId) => ({
  type: ADD_REVIEW,
  payload: { review, resId },
  meta: { generateId: ['reviewId', 'userId'] },
});

export default (state = arrToMap(normalizedReviews), action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_REVIEW:
      const { review, reviewId, userId } = payload;
      const { text, rating } = review;
      return {
        ...state,
        [reviewId]: { id: reviewId, userId, text, rating },
      };
    default:
      return state;
  }
};

export const reviewsSelector = (state) => state.reviews;

export const reviewSelector = (state, { id }) => reviewsSelector(state)[id];
