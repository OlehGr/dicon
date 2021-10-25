

function UsersListItem(props) {

    const user = props.user;
    const follow = user.isFolowed? 'Unfollow' : 'Follow';


    return( <li className='users-list__item'>
                <div className='user'>
                    <div className='user__face'>
                        <div className='user__ava'><img src={user.avatar}/></div>
                        <button className='user__follow' onClick={() => props.changeFollow(user.id)}>{follow}</button>
                    </div>
                    <div className='user__info'>
                        <h2 className='user__name'>{user.userName}</h2>
                        <p className='user__status'>{user.status}</p>
                        <p className='user__homeland'>{user.homeland.country}, {user.homeland.city}</p>

                    </div>
                </div>
            </li>)
}

export default UsersListItem;

