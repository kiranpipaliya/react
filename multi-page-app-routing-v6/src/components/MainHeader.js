import { NavLink } from 'react-router-dom';

import classes from './MainHeader.module.css';

const MainHeader = () => {

  const activeClass = (navData) => navData.isActive ? classes.active : "";
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink className={activeClass} to='/welcome'>
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink className={activeClass} to='/products'>
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
