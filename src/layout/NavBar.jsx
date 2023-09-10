const NavBar = () => {
  const menus = (
    <>
      <li>
        <a
          href=""
          className="text-primary capitalize hover:bg-transparent hover:text-secondary"
        >
          home
        </a>
      </li>
      <li>
        <a
          href=""
          className="text-primary capitalize hover:bg-transparent hover:text-secondary"
        >
          Services
        </a>
      </li>
      <li>
        <a
          href=""
          className="text-primary capitalize hover:bg-transparent hover:text-secondary"
        >
          Projects
        </a>
      </li>
      <li>
        <a
          href=""
          className="text-primary capitalize hover:bg-transparent hover:text-secondary"
        >
          News
        </a>
      </li>
      <li>
        <a
          href=""
          className="text-primary capitalize hover:bg-transparent hover:text-secondary"
        >
          About us
        </a>
      </li>
    </>
  );
  return (
    <nav className="navbar bg-base-100 px-20 fixed z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menus}
          </ul>
        </div>
        <a className="normal-case text-3xl cursor-pointer font-bold text-primary leading-10">
          Creati<span className="text-secondary">ve</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menus}</ul>
      </div>
      <div className="navbar-end">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
