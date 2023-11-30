import { Link, Outlet } from "react-router-dom";

const LinkLayout = () => {
  return (
    <div>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/main"}>Main</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/facts"}>Facts</Link>
      </div>

      <Outlet />
    </div>
  );
};

export default LinkLayout;
