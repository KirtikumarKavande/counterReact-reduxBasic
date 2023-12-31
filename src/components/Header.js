import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { authAction } from '../store';


const Header = () => {
 const isLoggedIn= useSelector((state)=>state.AuthStatus.isLogin)
 const dispatch= useDispatch()
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {
        isLoggedIn &&
        <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={()=>{dispatch(authAction.logout())}}>Logout</button>
          </li>
        </ul>
      </nav>
      }
      
    </header>
  );
};

export default Header;
