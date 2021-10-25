


function CreatePost(props) {
    return (
        <div className='post-creating'>
            <textarea value={props.newpostText} onChange={(e) => { props.changeVal(e.target.value)} } className='post-creating__input'></textarea>
            <button onClick={props.sendPost} className='post-creating__btn'>Добавить пост</button>
        </div>
    );
}

export default CreatePost;