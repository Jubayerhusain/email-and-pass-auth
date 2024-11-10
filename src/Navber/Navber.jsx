import { NavLink } from "react-router-dom";

function Navber() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to='/signIn'>Sign IN</NavLink>
          </li>
          <li>
            <NavLink to='/signUp'>Sign UP</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navber;
