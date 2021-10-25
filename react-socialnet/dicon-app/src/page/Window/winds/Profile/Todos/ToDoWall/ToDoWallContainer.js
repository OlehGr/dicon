import { connect } from "react-redux";
import ToDoWall from "./ToDoWall";

let mapStateToProps = (state) => {
    return {
        wallurl: state.profilePage.wall
    }
}

const ToDoWallContainer = connect(mapStateToProps)(ToDoWall);

export default ToDoWallContainer;