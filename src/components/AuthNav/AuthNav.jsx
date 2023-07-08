import { Link, IconRegister, IconLogin } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <div>
      <Link to="/register">
        Register
        <IconRegister/>
      </Link>
      <Link to="/login">
        Log In
        <IconLogin/>
      </Link>
    </div>
  );
};

export default AuthNav;