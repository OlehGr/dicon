import { Route } from "react-router";

function Nav(props) {
    
    return(
        <div className={props.class}>
            <ul className='nav__wrapper'>
                <li>
                    <a href='/profile' className='nav__btn' >Profile</a>
                </li>
                <li>
                    <a href='/posts' className='nav__btn'>Posts</a>
                </li>
                <li>
                    <a className='nav__btn'>Messeges</a>
                </li>
                <li>
                    <a href='/users' className='nav__btn'>Users</a>
                </li>
            </ul>
            
        </div>
    );
}

export default Nav;