import { NavLink, Outlet } from 'react-router-dom'
import { brand, contact } from '../data/contact'

function Layout() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="main-nav-wrap">
          <div className="brand-wrap">
            <span className="brand-logo" aria-hidden="true">
              RC
            </span>
            <div>
              <h1 className="brand-name">{brand.name}</h1>
              <p className="brand-tagline">{brand.tagline}</p>
            </div>
          </div>

          <nav className="main-nav" aria-label="Main navigation">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/catalog">Catalog</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </div>
      </header>

      <main className="page-content">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="footer-links">
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
          {contact.socials.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
              {item.label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  )
}

export default Layout