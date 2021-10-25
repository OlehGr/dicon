import { connect } from "react-redux";
import { changeTitleCreator } from "../../../../../../redux/profile-reducer";
import { changeToggleCreator } from "../../../../../../redux/profile-reducer";
import ToDoBirthDate from "./ToDoBirthDate";

// function ToDoBirthContainer(props) {
    

//     const state = props.store.getState();
//     const title = state.profilePage.birth.title;
//     const isToggle = state.profilePage.birth.isToggleon;

    
//     const changeToggle = () => { 
//         props.store.dispatch( changeToggleCreator('birth'));
        
//     } 
//     const changeTitle = (val) => {
//         props.store.dispatch(changeTitleCreator(val, 'birth')); 
//     } 


//     return <ToDoBirthDate title={title}
//                             isToggle={isToggle}
//                             changeToggle={changeToggle}
//                             changeTitle={changeTitle} />
// }




let mapStateToProps = (state) => {
    return {
        title: state.profilePage.birth.title,
        isToggle: state.profilePage.birth.isToggleon
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeToggle: () => dispatch( changeToggleCreator('birth')) ,
        changeTitle: (val) => dispatch(changeTitleCreator(val, 'birth')) 
    }
}


const ToDoBirthContainer = connect(mapStateToProps, mapDispatchToProps)(ToDoBirthDate);

export default ToDoBirthContainer;