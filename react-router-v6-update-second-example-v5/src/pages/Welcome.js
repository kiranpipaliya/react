import { Link, Outlet, useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate()
  // navigate(-1) back 1 page 
  // navigate(-2) back 2 page 
  // navigate(1) FORWARD 1 page 
  // navigate(2) FORWARD 2 page 
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Link to="new-user"  >New Users</Link>
      <Outlet></Outlet>
    </section>
  );
};

export default Welcome;
