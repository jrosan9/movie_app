import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  return (
    <>
      <div id="nav_wrapper">
        <div id="netflix_logo">
          <Link to="/">
            <img
              src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940"
              alt="Netflix logo"
            />
          </Link>
        </div>
        <Link to="/movies">Movies</Link>
        <p>TV shows</p>
        <p>New & Popular</p>
        <Link to="/" id="search_link">
          <SearchIcon className="search_icon" />

          {/* <input
            placeholder="search"
            style={{ height: "15px", marginTop: "10px", borderRadius: "5px" }}
          /> */}
        </Link>
      </div>
    </>
  );
}
export default Navbar;
