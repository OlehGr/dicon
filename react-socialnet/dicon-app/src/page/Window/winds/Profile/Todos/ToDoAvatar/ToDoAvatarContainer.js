import { connect } from "react-redux";
import ToDoAvatar from "./ToDoAvatar";

let mapStateToProps = (state) => {
    return {
        ava: state.profilePage.ava
    }
}

const ToDoAvatarContainer = connect(mapStateToProps)(ToDoAvatar)

export default ToDoAvatarContainer;