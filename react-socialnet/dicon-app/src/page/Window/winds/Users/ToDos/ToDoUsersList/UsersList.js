import UsersListItem from "./UsersListItem";
import * as axios from "axios";

function UsersList(props) {
    if (props.usersList.length === 0) {
        debugger
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(
                [
                    {
                        id: 1,
                        isFolowed: false,
                        avatar: 'https://cdn1.flamp.ru/a7a519d89fb5cc3f13c96188deacd9ab.jpg',
                        userName: 'Sasha',
                        status: 'Evrything is cool',
                        homeland: {country: 'Ukrane', city: 'Kiev'}
                    },
                    {
                        id: 2,
                        isFolowed: true,
                        avatar: 'https://pbs.twimg.com/media/B65SN-fCAAAA1AR.jpg:large',
                        userName: 'Vadya',
                        status: 'Asyjdau',
                        homeland: {country: 'Russia', city: 'Moscov'}
                    },
                    {
                        id: 3,
                        isFolowed: true,
                        avatar: 'https://moscow.citybb.ru/upl/18/11/79757-5be1a277820029-923886941.jpg',
                        userName: 'Lidia',
                        status: 'Me is sleeping',
                        homeland: {country: 'Polsha', city: 'Praga'}
                    },
                    {
                        id: 4,
                        isFolowed: false,
                        avatar: 'https://vraki.net/sites/default/files/inline/images/10_342.jpg',
                        userName: 'Tom',
                        status: 'Get it!',
                        homeland: {country: 'USA', city: 'New-York'}
                    },
                    {
                        id: 5,
                        isFolowed: true,
                        avatar: 'https://uprostim.com/wp-content/uploads/2021/03/image149-29.jpg',
                        userName: 'Masha',
                        status: '...',
                        homeland: {country: 'Belarus', city: 'Minsk'}
                    },
                    {
                        id: 6,
                        isFolowed: false,
                        avatar: 'https://klike.net/uploads/posts/2018-06/1528377344_7.jpg',
                        userName: 'Slave',
                        status: 'Like a boss',
                        homeland: {country: 'Turkey', city: 'Alania'}
                    }
                ]
            )
        });
        debugger
    }



    return (
        <ul className='users-list'>
            {
                props.usersList.map(item => {
                    return <UsersListItem key={item.id} user={item} changeFollow={props.changeFollow}/>
                })
            }
        </ul>
    );
}

export default UsersList;