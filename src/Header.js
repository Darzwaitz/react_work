// destructured 'props' object -> props.title {title}
const Header = ({ title }) => {
  return (
    <header>
      <h1>{title} list</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Default title",
};

export default Header;
