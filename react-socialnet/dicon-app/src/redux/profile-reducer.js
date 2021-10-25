const CHANGE_ELEMENT_TITLE = 'CHANGE-ELEMENT-TITLE',
        CHANGE_ELEMENT_TOGGLE = 'CHANGE-ELEMENT-TOGGLE';
// Константы значений type для удобства и исключения ошибок

let initialState = {
                wall: "url('https://nikastroy.ru/wp-content/uploads/5/4/7/547591911ee5124c4a49f0974d464dfa.jpeg')",
                ava: 'https://cdn1.flamp.ru/a7a519d89fb5cc3f13c96188deacd9ab.jpg',
                userName: {
                    title: 'Egor Flamov',
                    isToggleon: false,
                },
                birth: {
                    title: '1 Junaury of 2000',
                    isToggleon: false,
                },
                homeland: {
                    title: 'Moscow',
                    isToggleon: false,
                },
                educate: {
                    title: 'School №1',
                    isToggleon: false,
                },
                status: {
                    title: 'Hey! My life is cool ;)',
                    isToggleon: false,
                },
}

//4. Каждый reducer берёт action, в котором обязательно есть свойство type, и прогоняет это свойство по свом условиям
//5. Если type совпадает с каким-то из них reducer преобразует фрагмент state, переданного ему (возможно, используя другие свойства в action) и возвращает переработанный state. *Если reducer не находит у себя ни одного подходящего условия он просто возвращает state без изменений
// Сам reducer

// state и action нам передал dispatch
// От type (типа) переданного в объект action



const profileReducer = (state = initialState, action) => { 
    switch (action.type) {
        case CHANGE_ELEMENT_TITLE:
            return { // Возвращаем глубокую копию объекта с некоторыми изменёнными значениями
                ...state, // Копируем state
                [action.goal]: { // Но в котором объект
                    ...state[action.goal], // Будет идентичен
                    title: action.val // За исключением title, ему присвоим что-то другое
                }
            }
        case CHANGE_ELEMENT_TOGGLE:
            return {
                ...state,
                [action.goal]: {
                    ...state[action.goal],
                    isToggleon: !state[action.goal].isToggleon
                }
            }
        default:
            return {...state};
    }
}

export const changeTitleCreator = (val, item) => {
    return {type: CHANGE_ELEMENT_TITLE, val: val, goal: item}
}

export const changeToggleCreator = (item) => {
    return {type: CHANGE_ELEMENT_TOGGLE, goal: item}
}

export default profileReducer;