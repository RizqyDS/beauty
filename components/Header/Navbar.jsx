"use client";

const links = [
  {
    name: "Home",
    path: "home",
  },
  {
    name: "About",
    path: "about",
  },
  {
    name: "Services",
    path: "services",
  },
  {
    name: "Gallery",
    path: "gallery",
  },
  {
    name: "Contact",
    path: "contact",
  },
];

const Nav = ({ containerStyles, listStyles, linkStyles, spy }) => {
  return (
    <nav className={containerStyles}>
      <ul className={listStyles}>
        {links.map((link, index) => {
          return (
            <li key={index}>
              <a href={`#${link.path}`} className={linkStyles} spy={spy}>
                {link.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;