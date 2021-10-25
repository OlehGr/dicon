

function ToDoHomeland(props) {

    if (props.isToggle) {
        return <p className='profile__homeland'><input type='text' value={props.title}
        onChange={e => props.changeTitle(e.currentTarget.value)}
        onDoubleClick={props.changeToggle} /></p>
    } else {
        return <p className='profile__homeland' onDoubleClick={props.changeToggle} >{props.title}</p>
    }
}

export default ToDoHomeland;