const CHANGE_FOLLOWING = 'CHANGE-FOLLOWING';
const SET_USERS = 'SET-USERS';

let initialState = {
    userscount() {return this.usersList.length},
    usersList: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_FOLLOWING:
            return {
                ...state,
                usersList: 
                    state.usersList.map(item => {
                        if (item.id == action.key) {
                            return {...item, isFolowed: !item.isFolowed}
                        } else {
                            return {...item}
                        }
                    })
            }
        case SET_USERS:
            return {
                ...state,
                usersList:
                    [...state.usersList, ...action.users]
            }

    
        default:
            return {...state}
    }
}

export const ChangeFollowingAC = (key) => {
    return { type: CHANGE_FOLLOWING, key: key}
}

export const SetUsersAC = (users) => {
    return { type: SET_USERS, users: users}
}

export default usersReducer;