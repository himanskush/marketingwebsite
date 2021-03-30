export default function Footer({ copyright = '2021' }) {
  return (
    <footer className="footer-main text-center">
      <div
        className="row"
        style={{ paddingTop: '1rem', paddingBottom: '1rem' }}
      >
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Hostinger.com 
        </a>
        {' '} and <img src="/nextjs.svg" alt="Next.js" width="76" />
        {/* <a href="https://jwt.io/">
          <img src="/jwt.svg" alt="JWT" width="84" />
        </a> */}
        <span>
          All logos, trademarks and registered trademarks are the property of
          this company.
        </span>
      </div>
    </footer>
  );
}
