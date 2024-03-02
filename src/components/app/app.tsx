import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
import { AppRoute, AuthStatus } from '../../const';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoriteScreen from '../../pages/favorites-screen/favorites-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import PageNotFoundScreen from '../../pages/page-not-found/page-not-found';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';

type AppProps = {
  placeCountCard: number;
}

function App({ placeCountCard }: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<MainScreen placeCountCard={placeCountCard} />} />
          <Route path={AppRoute.Login} element={<LoginScreen />} />
          <Route path={AppRoute.Favorites} element={<PrivateRoute authStatus={AuthStatus.NoAuth}><FavoriteScreen /></PrivateRoute>} />
          <Route path={AppRoute.Offer} element={<OfferScreen />} />
          <Route path='*' element={<PageNotFoundScreen />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>);

}

export default App;
