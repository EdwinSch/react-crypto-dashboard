import GetDate from "./GetDate";
import Toggle from "./Toggle";

const Header = () => {
  return (
    <header>
      <div className="header-titles">
        <h1>crypto dashboard</h1>
        <GetDate />
      </div>
      <Toggle />
    </header>
  );
};

export default Header;
