import { NavLink } from 'react-router-dom';
import css from './pages.module.css';

const Navigation = () => {
  return (
    <nav className={css.navLinks}>
      <NavLink
        to="/"
        className={css.link}
        style={({ isActive }) =>
          isActive
            ? {
                fill: '#82d81f',
              }
            : { fill: '#ffffff' }
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={css.link}
        style={({ isActive }) =>
          isActive
            ? {
                color: '#82d81f',
              }
            : { color: '#ffffff' }
        }
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
