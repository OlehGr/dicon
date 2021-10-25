import { connect } from "react-redux";
import { changeTitleCreator } from "../../../../../../redux/profile-reducer";
import { changeToggleCreator } from "../../../../../../redux/profile-reducer";
import ToDoHomeland from "./ToDoHomeland";

// function ToDoHomeContainer(props) {
    
//     const state = props.store.getState();
//     const title = state.profilePage.homeland.title;
//     const isToggle = state.profilePage.homeland.isToggleon;

    
//     const changeToggle = () => { 
//         props.store.dispatch( changeToggleCreator('homeland'));
        
//     } 
//     const changeTitle = (val) => {
//         props.store.dispatch(changeTitleCreator(val, 'homeland')); 
//     } 


//     return <ToDoHomeland title={title}
//                             isToggle={isToggle}
//                             changeToggle={changeToggle}
//                             changeTitle={changeTitle} />
// }

let mapStateToProps = (state) => {
    return {
        title: state.profilePage.homeland.title,
        isToggle: state.profilePage.homeland.isToggleon
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeToggle: () => dispatch( changeToggleCreator('homeland')),
        changeTitle: (val) => dispatch(changeTitleCreator(val, 'homeland'))
        
    }
}

const ToDoHomeContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoHomeland)

export default ToDoHomeContainer;