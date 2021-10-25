import { connect } from "react-redux";
import UsersList from "./UsersList";
import {ChangeFollowingAC, SetUsersAC} from '../../../../../../redux/users-reducer'

let mapStateToProps = (state) => {
    return {
        usersList: state.usersPage.usersList
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeFollow: key => dispatch(ChangeFollowingAC(key)),
        setUsers: users => dispatch(SetUsersAC(users))
    }
}

const UsersListContainer = connect(mapStateToProps, mapDispatchToProps)(UsersList)

export default UsersListContainer;