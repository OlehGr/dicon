function ToDoPost(props) {
    
    const post = props.post;
    return (
        <li className='posts-list__item' key={post.id}>{post.title}</li>
    );
}

export default ToDoPost;