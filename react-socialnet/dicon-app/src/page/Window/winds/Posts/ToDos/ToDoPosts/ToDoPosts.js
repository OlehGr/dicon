import ToDoPost from "./ToDoPost";

function ToDoPosts(props) {
    
    return (
        <ul className='posts-list'>
            {
            props.posts.map(item => {
                return <ToDoPost post={item} />})
            }
        </ul>
    );
}

export default ToDoPosts;