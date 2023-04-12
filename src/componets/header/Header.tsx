import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import style from './Header.module.scss';
import Container from '../UI/Container';

const Header = () => {
   return (
      <header className={style.header}>
         <Container className={style.header__container}>
            <div className={style.header__logo}>
               <Link to="/">
                  <h2>
                     E-Shop<span>App</span>
                  </h2>
               </Link>
               <AiFillStar color="#fff" size={28} />
            </div>
            <nav className={style.header__nav}>
               <div className={style['header__nav-desktop']}>
                  <Link to="/">Hi, Piotr</Link>
                  <Link to="/order-history">My Orders</Link>
                  <Link to="/login">Login</Link>
                  <Link to="/">Logout</Link>
                  <Link to="/contact">Contact Us</Link>
               </div>
               <Link to="/cart" className={style.header__cart}>
                  <span>Cart</span>
                  <FaShoppingCart size={28} color="#fff" />
               </Link>
               <GiHamburgerMenu className={style.header__button} size={28} />
            </nav>
         </Container>
      </header>
   );
};

export default Header;
