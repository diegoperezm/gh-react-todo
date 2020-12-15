import   React                  from 'react';
import { useState, useEffect }  from 'react';

import Row                      from 'react-bootstrap/Row';
import Col                      from 'react-bootstrap/Col';
import Form                     from 'react-bootstrap/Form';
import Button                   from 'react-bootstrap/Button';

const INITIALSTATE = {
  email: '',
  password: '',
};


/*
 * Naive implementation of user auth 
*/
const SignInFormBase = (props) => {
  const [userInfo, setUserInfo]   = useState(INITIALSTATE);
  const [error, setError ]        = useState(false);

  const onSubmit = event => {
    event.preventDefault();
      if(userInfo.email === 'test@test.com' && userInfo.password === 'pass') {
        props.setUser(true);
      } else {
        setError(true);
      }
  };

  useEffect( () => {
      if(error) {
        alert(' email: test@test.com \n password: pass');
        setError(false);
      }
  }, [error] );
    
  const onChange = event => {
    const {name, value} = event.target;
      setUserInfo((userInfo) => ({...userInfo, [name]: value}));
  };

  const isInvalid = userInfo.password === '' || userInfo.email === '';
  return (
      <Form
        onSubmit={onSubmit}>
      <Form.Control
        className="mb-2"
        name="email"
        autoComplete="off"
        value={userInfo.email}
        onChange={onChange}
        type="text"
        placeholder="Email Address"
      />
      <Form.Control
        name="password"
        autoComplete="off"
        value={userInfo.password}
        onChange={onChange}
        type="password"
        placeholder="Password"
      />
        <Button
          className="mt-2 float-right"
          disabled={isInvalid}
          type="submit"
        >
        Sign In
      </Button>
    </Form>
  );
}



const SignInPage = props => (
 <Row>
   <Col >
     <div>
       <h1 className="text-center mb-5">Sign In</h1>
        <SignInFormBase setUser={props.setUser}/>
     </div>
  </Col>
  </Row>
);


export default SignInPage;

