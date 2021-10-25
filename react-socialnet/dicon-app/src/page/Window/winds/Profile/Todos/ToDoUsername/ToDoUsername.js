
function ToDoUsername(props) {
    

    if (props.isToggle) {
        debugger;
        return <h2 className='profile__name'><input type='text' value={props.title}
        onChange={e => props.changeTitle(e.target.value)}
        onDoubleClick={props.changeToggle} /></h2>
    } else {
        return <h2 className='profile__name' onDoubleClick={props.changeToggle} >{props.title}</h2>
    }
}

export default ToDoUsername;