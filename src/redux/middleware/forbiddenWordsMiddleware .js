import { ADD_TASK, FOUND_BAD_WORD /* , CHANGE_CURRENT */ } from '../actions/action-types';

const forbiddenWords = ['spam', 'money'];

export const forbiddenWordsMiddleware = ({ dispatch }) => (next) => (action) => {
      // do your stuff
      if (action.type === ADD_TASK /* || action.type === CHANGE_CURRENT */) {
        
        const foundWord = forbiddenWords.filter(word =>
          action.id.text.includes(word)
        );
        if (foundWord.length) {
          return dispatch({ type: FOUND_BAD_WORD });
        }
      }
      return next(action);
}