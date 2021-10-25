import { connect } from "react-redux";
import { changeTitleCreator } from "../../../../../../redux/profile-reducer";
import { changeToggleCreator } from "../../../../../../redux/profile-reducer";
import ToDoStatus from './ToDoStatus'

// function ToDoStatusContainer(props) {

//     const state = props.store.getState();
//     const title = state.profilePage.status.title;
//     const isToggle = state.profilePage.status.isToggleon;

    
//     const changeToggle = () => { 
//         props.store.dispatch( changeToggleCreator('status'));
        
//     } 
//     const changeTitle = (val) => {
//         props.store.dispatch(changeTitleCreator(val, 'status')); 
//     } 


//     return <ToDoStatus title={title}
//                             isToggle={isToggle}
//                             changeToggle={changeToggle}
//                             changeTitle={changeTitle} />
// }

let mapStateToProps = (state) => {
    return {
        title: state.profilePage.status.title,
        isToggle: state.profilePage.status.isToggleon

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeToggle: () => dispatch( changeToggleCreator('status')),
        changeTitle: (val) => dispatch(changeTitleCreator(val, 'status')) 
        }
}

const ToDoStatusContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoStatus)

export default ToDoStatusContainer;