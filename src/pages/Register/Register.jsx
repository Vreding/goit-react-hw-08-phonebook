import { Helmet } from 'react-helmet';
import RegisterForm from 'components/RegisterForm';
import { Title, Wrapper } from './Register.styled';

export default function Register() {
  return (
    <Wrapper>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <Title>Registration form</Title>
      <RegisterForm />
    </Wrapper>
  );
}
