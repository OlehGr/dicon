

function ToDoBirthDate(props) {
    

    if (props.isToggle) {
        return <p className='profile__date'><input type='text' value={props.title}
        onChange={e => props.changeTitle(e.currentTarget.value)}
        onDoubleClick={props.changeToggle} /></p>
    } else {
        return <p className='profile__date' onDoubleClick={props.changeToggle} >{props.title}</p>
    }
}

export default ToDoBirthDate;