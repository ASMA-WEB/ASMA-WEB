
import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

const Signup = lazy(() => import('pages/SignUp'));
const Login =lazy(()=> import ('pages/Login'));

const useRoutesHook = () => {
  let element = useRoutes([
    { path: '/', element: <Signup /> },
    { path: '/login', element: <Login /> },
  ]);
  return element;
};

export default useRoutesHook;
