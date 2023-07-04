import GetDate from "./GetDate";

const Header = () => {
  return (
    <header>
      <div className="header-titles">
        <h1>crypto dashboard</h1>
        <GetDate />
      </div>
      <div className="color-switch">
        <label htmlFor="">dark mode</label>
      </div>
    </header>
  );
};

export default Header;
