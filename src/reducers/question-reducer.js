import {
  FETCH_QUESTION_SUCCESS,
  CHECK_QUESTION_SUCCESS,
  TOGGLE_BTN_SUCCESS,
  TOGGLE_BTN_SUCCESS_BACK,
} from '../actions/questions';

import {
  CLEAR_AUTH
} from '../actions/auth';

const initialState = {
  isCorrect: 'false',
  currentQuestion: null,
  currentAnswer: null,
  btnToggle: false,
  answerFeedback: null,
  questionCorrect: 0,
  questionTotal: 0,
  score: 0,
  attempted: 0
};

export function questionReducer(state=initialState, action) {
  switch (action.type) {
    case FETCH_QUESTION_SUCCESS:
    console.log(state.score);
    console.log(state.attempted);
    return {
      ...state,
      currentQuestion: action.question.question,
      currentAnswer: action.question.answer,
      score: action.question.score,
      attempted: action.question.attempted
    }
    case CHECK_QUESTION_SUCCESS:
    console.log(state.questionCorrect);
    state.questionTotal++;
    if (action.input === state.currentAnswer) {
      state.questionCorrect++;
      return {
        ...state,
        isCorrect: 'true',
        answerFeedback: 'Correct!',
      }
    }
    else return {
      ...state,
      isCorrect: 'false',
      answerFeedback: 'Incorrect!'
    }
    case TOGGLE_BTN_SUCCESS:
    console.log('is Correct now: ');
    return {
      ...state,
      btnToggle: true,
    }
    case TOGGLE_BTN_SUCCESS_BACK:
    return {
      ...state,
      btnToggle: false,
      currentQuestion: null,
      currentAnswer: null,
    }
    case CLEAR_AUTH:
    return {
      ...state,
      currentQuestion: null,
      currentAnswer: null,
      isCorrect: null,
      questionCorrect: 0,
      questionTotal: 0,
    }
    default: return state;
  }
}

export default questionReducer;