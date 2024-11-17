import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <div className=" absolute right-10 z-1 flex  space-x-9">
        <Link to="/">Home</Link>
        <Link to="/sale-items">Sale Items</Link>
        <Link to="/women">Women</Link>
        <Link to="/men">Men</Link>
        <Link to="/electronics">Electronics</Link>
      </div>
    </div>
  );
}
