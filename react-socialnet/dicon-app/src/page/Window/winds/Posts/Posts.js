import ToDoCreatingPost from "./ToDos/ToDoCreatingPost/ToDoCreatingPost";
import ToDoPostsContainer from "./ToDos/ToDoPosts/ToDoPostsContainer";



function Posts() {
    return (
        <div className='posts'>
            <ToDoCreatingPost />
            <ToDoPostsContainer />
        </div>
    );
}

export default Posts;