import Link from 'next/link';

/* Components */

const Header = ({ props }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg p-2">
        <Link href="/">
          <h1><a className="nav-item nav-link"><b>HOSTINGER.COM</b></a></h1>
        </Link>
        <Link href="/about">
          <a className="nav-item nav-link">About</a>
        </Link>
        <Link href="/contact">
          <a className="nav-item nav-link">Contact Us</a>
        </Link>
        {/* <Link href="/login">
          <a className="nav-item nav-link">Login / Register</a>
        </Link> */}
        <Link href="/products">
          <a className="nav-item nav-link">Our Products</a>
        </Link>
      </nav>
      <style jsx>{`
        a {
          margin: 0 10px 0 0;
        }
      `}</style>
    </>
  );
};

export default Header;
