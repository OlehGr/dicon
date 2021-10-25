import ToDoUsernameContainer from './Todos/ToDoUsername/ToDoUsernameContainer'
import ToDoBirthDateContainer from './Todos/ToDoBirthDate/ToDoBirthContainer'
import ToDoHomeContainer from './Todos/ToDoHomeland/ToDoHomeContainer'
import ToDoEduContainer from './Todos/ToDoEducate/ToDoEduContainer'
import ToDoStatusContainer from './Todos/ToDoStatus/ToDoStatusContainer'
import ToDoWallContainer from './Todos/ToDoWall/ToDoWallContainer'
import ToDoAvatarContainer from './Todos/ToDoAvatar/ToDoAvatarContainer'

function Profile(props) {


    return(
        <div>
            <ToDoWallContainer />
            <div className='profile'>
                <div className='profile__ava'>
                    <ToDoAvatarContainer />
                </div>
                <div className='profile__desc'>

                    <ToDoUsernameContainer />

                    <div className='profile__data'>
                        <ToDoBirthDateContainer />

                        <ToDoHomeContainer />

                        <ToDoEduContainer />

                    </div>
                </div>
            </div>
            <div className='status'>
                {/* <p className='status__text'>{props.profiles.egor.status}</p> */}
                <ToDoStatusContainer />
            </div>
        </div>
    );
    
}

export default Profile;