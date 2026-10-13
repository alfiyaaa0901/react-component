import { Link, NavLink } from "react-router-dom";

// One shared style for all menu links.
// NavLink tells us if the link is the current page (isActive).
const linkClass = ({ isActive }) =>
  `relative pb-[3px] text-[0.88rem] font-light tracking-[0.06em] transition-all hover:text-[var(--sienna)] ${
    isActive ? "text-[var(--sienna)]" : "text-[var(--charcoal)]"
  }`;

function Navbar() {
  return (
    <header className="sticky top-0 z-[100] border-b px-6 bg-[rgba(253,248,240,0.92)] backdrop-blur-md">
      <nav className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex flex-col leading-none"
          aria-label="Mori no Mise Home"
        >
          <span className="text-[1.55rem] font-normal tracking-[0.04em] text-[var(--charcoal)]">
            Mori no Mise
          </span>
          <span className="mt-px text-[0.7rem] tracking-[0.2em] text-[var(--sienna)]">
            森の店 · handmade goods
          </span>
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center gap-6">
          <li>
            <NavLink to="/" end className={linkClass}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop" className={linkClass}>
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={linkClass}>
              Our Story
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Cart Icon */}
        <div
          className="relative cursor-pointer text-[1.2rem]"
          aria-label="Shopping cart"
        >
          🛒
          <span className="absolute -top-[6px] -right-[8px] flex h-4 w-4 items-center justify-center rounded-full bg-[var(--dusty-rose)] text-[0.6rem] text-white">
            3
          </span>
        </div>

        {/* Mobile hamburger */}
        <div
          className="hidden flex-col gap-[5px] cursor-pointer p-1"
          aria-label="Menu"
        >
          <span className="block w-6 h-[1.5px] bg-[var(--charcoal)] transition-all"></span>
          <span className="block w-6 h-[1.5px] bg-[var(--charcoal)] transition-all"></span>
          <span className="block w-6 h-[1.5px] bg-[var(--charcoal)] transition-all"></span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;