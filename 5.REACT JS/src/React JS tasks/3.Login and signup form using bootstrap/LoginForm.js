import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function LoginForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="password" />
      </Form.Group>
      <Button variant="success">Login</Button>{' '}
    </Form>
  );
}

export default LoginForm;