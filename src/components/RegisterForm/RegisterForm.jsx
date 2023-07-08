import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Formik } from 'formik';
import { Form, Label, Field, Button, Icon } from './RegisterForm.styled';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = ({name, email, password}, {resetForm}) => {     
    dispatch(register({ name, email, password }));
    resetForm();
  };  

  return (     
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <Label>
          User name
          <Field id='name'
            type="text"
            name="name"
            placeholder="Please enter your name"            
            required
          />
        </Label>
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
          Register
          <Icon/>
        </Button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
