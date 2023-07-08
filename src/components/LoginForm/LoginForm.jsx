import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Formik } from 'formik';
import { Form, Label, Field, Button, Icon } from './LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({email, password}, { resetForm }) => {
    dispatch(logIn({ email, password }));
    resetForm();
  };  

  return (  
    <Formik
      initialValues={{        
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form>        
        <Label>
          Email
          <Field id='email'
            type="email"
            name="email"
            placeholder="Please enter your email address"
            required
          />
        </Label>
        <Label>
          Password
          <Field id='password'
            type="password"
            name="password"
            placeholder="Please enter your password"            
            required
          />
        </Label>
        <Button type="submit">
          Log In
          <Icon/>
        </Button>
      </Form>
    </Formik>
  );
};

export default LoginForm;