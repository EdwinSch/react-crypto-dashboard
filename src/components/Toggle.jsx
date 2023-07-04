const Toggle = () => {
  return (
    <label className="toggle">
      <span className="toggle-label">Dark Mode</span>
      <input className="toggle-checkbox" type="checkbox" />
      <div className="toggle-switch"></div>
    </label>
  );
};

export default Toggle;
