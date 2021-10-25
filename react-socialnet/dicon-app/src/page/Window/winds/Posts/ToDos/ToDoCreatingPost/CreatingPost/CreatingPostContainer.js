
import { connect } from "react-redux";
import { sendNewPostCreator } from "../../../../../../../redux/posts-reducer";
import CreatingPost from "./CreatingPost";

let mapDispatchToProps = (dispatch) => {
    return {
        sendPost: () => {
            dispatch(sendNewPostCreator())
        }
    }
}

const CreatingPostContainer = connect(() => {}, mapDispatchToProps)(CreatingPost)

export default CreatingPostContainer;