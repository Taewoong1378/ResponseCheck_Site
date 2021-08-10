import produce from '../util/produce';

export const initialState = {
    nickname: null,
    nicknameLoading: false,
    nicknameDone: false,
    nicknameError: null,
    score: null,
};

export const NICKNAME_REQUEST = 'NICKNAME_REQUEST';
export const NICKNAME_SUCCESS = 'NICKNAME_SUCCESS';
export const NICKNAME_FAILURE = 'NICKNAME_FAILURE';

export const nicknameRequestAction = (data) => ({
    type: NICKNAME_REQUEST,
    data,
  });

const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch (action.type) {
        case NICKNAME_REQUEST:
            draft.nicknameLoading = true;
            draft.nicknameDone = false;
            draft.nicknameError = null;
            break;
        case NICKNAME_SUCCESS:
            draft.nicknameLoading = false;
            draft.nickname = action.data.nickname;
            draft.score = action.data.score;
            draft.nicknameDone = true;
            break;
        case NICKNAME_FAILURE:
            draft.nicknameLoading = false;
            draft.nicknameError = action.error;
            break;
        default:
            break;
    }
});

export default reducer;
