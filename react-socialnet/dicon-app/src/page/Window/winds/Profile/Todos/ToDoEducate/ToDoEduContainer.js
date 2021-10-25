import { connect } from "react-redux";
import { changeTitleCreator } from "../../../../../../redux/profile-reducer";
import { changeToggleCreator } from "../../../../../../redux/profile-reducer";
import ToDoEducation from "./ToDoEducation";

// function ToDoEduContainer(props) {
    
//     const state = props.store.getState();
//     const title = state.profilePage.educate.title;
//     const isToggle = state.profilePage.educate.isToggleon;

    
//     const changeToggle = () => { 
//         props.store.dispatch( changeToggleCreator('educate'));
        
//     } 
//     const changeTitle = (val) => {
//         props.store.dispatch(changeTitleCreator(val, 'educate')); 
//     } 


//     return <ToDoEducation title={title}
//                             isToggle={isToggle}
//                             changeToggle={changeToggle}
//                             changeTitle={changeTitle} />
// }

let mapStateToProps = (state) => {
    return {
        title: state.profilePage.educate.title,
        isToggle: state.profilePage.educate.isToggleon
    }   
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeToggle: () => dispatch( changeToggleCreator('educate')),
        changeTitle: (val) => dispatch(changeTitleCreator(val, 'educate'))
    }
}

const ToDoEduContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoEducation);

export default ToDoEduContainer;