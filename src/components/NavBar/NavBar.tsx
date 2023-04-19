import { PageNavLink } from '../PageNavLink';

export const NavBar: React.FC = () => (
  <nav
    className="navbar is-fixed-top has-shadow"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="container">
      <div className="navbar-brand">
        <PageNavLink to="/" text="Home" />
        <PageNavLink to="/users" text="Users" />
      </div>
    </div>
  </nav>
);
