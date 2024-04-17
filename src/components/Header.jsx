import { MdPostAdd, MdMessage } from 'react-icons/md';
import { Link } from "react-router-dom";
import classes from './Header.module.css';

function Header() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <Link to='/newpost' className={classes.button} >
          <MdPostAdd size={18} />
          New Post
        </Link>
      </p>
    </header>
  );
}

export default Header;