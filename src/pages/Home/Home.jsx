import { useAuth } from 'hooks';
import { Greeting, Wrapper } from './Home.styled';

export default function Home() {
  const { isLoggedIn, user }= useAuth();

  return (
    <Wrapper>
      {isLoggedIn
        ? <Greeting><span>{user.name}</span>, welcome to phone book!</Greeting>
        : <Greeting>Welcome to phone book!<br/>Please pass register or authorization</Greeting>
      }      
    </Wrapper>
  );
}