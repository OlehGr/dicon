import { Route } from "react-router-dom";
import Posts from "./winds/Posts/Posts";
import Profile from "./winds/Profile/Profile";
import Users from "./winds/Users/Users";

function Window(props) {
    return(
        <div>
            
                <Route path='/profile' render={() => <Profile />} />
                <Route path='/posts' render={() => <Posts />} />
                <Route path='/users' render={() => <Users />} />
            
        </div>
    );
}

export default Window;