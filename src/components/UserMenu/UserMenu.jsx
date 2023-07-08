import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Button, Icon, UserName, Wrapper } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <UserName>Welcome, <span>{ user.name }</span></UserName>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Log Out
        <Icon/>
      </Button>
    </Wrapper>
  );
};

export default UserMenu;