
import { connect } from "react-redux";
import ToDoPosts from "./ToDoPosts";


let mapStateToProps = (state) => {
    return {posts: state.postsPage.postlist}
}


const ToDoPostsContainer = connect(mapStateToProps)(ToDoPosts)

export default ToDoPostsContainer;