
function ToDoStatus(props) {
    



    if (props.isToggle) {
        return <p className='profile__status'><input type='text' value={props.title}
        onChange={e => props.changeTitle(e.currentTarget.value)}
        onDoubleClick={props.changeToggle} /></p>
    } else {
        return <p className='profile__status' onDoubleClick={props.changeToggle} >{props.title}</p>
    }
}

export default ToDoStatus;