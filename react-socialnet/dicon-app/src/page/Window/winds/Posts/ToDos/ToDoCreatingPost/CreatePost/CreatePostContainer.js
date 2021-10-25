import { connect } from "react-redux";
import { changeNPInputValCreator } from "../../../../../../../redux/posts-reducer";
import { sendNewPostCreator } from "../../../../../../../redux/posts-reducer";
import CreatePost from "./CreatePost";


// function CreatePostContainer(props) {

//     const state = props.store.getState();
//     const newpostText = state.postsPage.newpostText;
//     const changeVal = (val) => {
//         props.store.dispatch(changeNPInputValCreator(val))
//     }
//     return <CreatePost val={newpostText} changeVal={changeVal} />
// }

let mapStateToProps = (state) => {
    return {
        newpostText: state.postsPage.newpostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendPost: () => {
            dispatch(sendNewPostCreator())
        },
        changeVal: (val) => {
            dispatch(changeNPInputValCreator(val))
        }
    }
}

const CreatePostContainer = connect(mapStateToProps, mapDispatchToProps)(CreatePost)

export default CreatePostContainer;