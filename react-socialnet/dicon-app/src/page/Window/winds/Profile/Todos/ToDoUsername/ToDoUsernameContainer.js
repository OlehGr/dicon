import ToDoUsername from "./ToDoUsername";
import { changeTitleCreator } from "../../../../../../redux/profile-reducer";
import { changeToggleCreator } from "../../../../../../redux/profile-reducer";
import { connect } from "react-redux";

// function ToDoUsernameContainer(props) {
    
//     const state = props.store.getState();
//     const title = state.profilePage.userName.title;
//     const isToggle = state.profilePage.userName.isToggleon;

    
//     const changeToggle = () => { // Мы прокинули dispatch в глубь по дереву и будем вызывать его по этой функции для удобства
//         let action = changeToggleCreator('userName');
//         props.store.dispatch(action); // Тут мы вызываем changeToggleCreator, который формирует объект необходимый dispatch
//         // Передаём в качестве аргумента 'userName', тк работает с компонентом, отвечающем за имя в профиле
//     } 
//     const changeTitle = (val) => {
//         props.store.dispatch(changeTitleCreator(val, 'userName')); // В dispatch мы передаём необходимые ему аргументы
//     } 


//     return <ToDoUsername title={title}
//                          isToggle={isToggle}
//                          changeToggle={changeToggle}
//                          changeTitle={changeTitle} />
// }






// connect изначально имеет в себе функционал Context.Consumer и имеет доступ к
// контексту react-redux (Provider)




let mapStateToProps = (state) => {
    return {
        title: state.profilePage.userName.title,
        isToggle: state.profilePage.userName.isToggleon

    }
}

let mapDispatchToProps = (dispatch) => {
    return {changeToggle: () => dispatch( changeToggleCreator('userName')),
            changeTitle: (val) => dispatch(changeTitleCreator(val, 'userName')) }
}



const ToDoUsernameContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoUsername)
// connect - это функция из react-redux, которая по первому вызову создаёт контейнерную
// компоненту, которая передаст объекты, переданные ей в первый вызов с помощью функций,
// возвращающих объекты со значениями из store, через в props в презентациооную копоненту




// Преймущество connect в том, что теперь при вызове dispatch будет ререндериться
// не всё дерево, а только компонента, в части state нужной которой произойдёт изменение.
// Это достигается с помощью процесса сравнения state с неким новым state, который 
// формируется в контейнерной компоненте, при вызове редусером диспатчем. Поэтому
// для корректной работы надо в reducer копирывать входящий объект(state) c глубиной,
// на которой будут происходить изменения



export default ToDoUsernameContainer;