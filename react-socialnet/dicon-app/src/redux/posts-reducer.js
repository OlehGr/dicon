const CHANGE_NEWPOSTINPUT_VAL = 'CHANGE-NEWPOSTINPUT-VAL',
    SEND_NEWPOST_VAL = 'SEND_NEWPOST_VAL';


let initialState = {
                postcount(){ return this.postlist.length },
                newpostText: '',
                postlist: [
                    {id: 1, title: 'Привет всем!'},
                    {id: 2, title: 'Как дела?'},
                    {id: 3, title: 'Всем мир!'}
                ],
}

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_NEWPOSTINPUT_VAL:
            return {...state,
                    newpostText: action.val}
        case SEND_NEWPOST_VAL:
            return {
                ...state,
                postlist: [...state.postlist, {
                    id: (state.postcount() + 1),
                    title: state.newpostText}],
                newpostText: ''
                }
        default:
            return {...state}
    }
}

export const changeNPInputValCreator = (val) => {
    return {type: CHANGE_NEWPOSTINPUT_VAL, val: val}
}

export const sendNewPostCreator = () => {
    return {type: SEND_NEWPOST_VAL}
}

export default postsReducer;