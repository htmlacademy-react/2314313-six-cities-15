import { AppRoute, AuthStatus } from '../../const';
import { Navigate } from 'react-router-dom';


type PrivateRouteProps = {
  authStatus: AuthStatus;
  children: JSX.Element;
}

function PrivateRoute({ authStatus, children }: PrivateRouteProps) {
  return (authStatus === AuthStatus.Auth ? children : <Navigate to={AppRoute.Login} />);
}

export default PrivateRoute;
