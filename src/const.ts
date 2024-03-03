const Settings = {
  placeCountCard: 10
};

enum AppRoute {
  Main='/',
  Login='/login',
  Favorites='/favorites',
  Offer='/offer/:id'
}

enum AuthStatus {
  Auth='AUTH',
  NoAuth='NO_AUTH',
  Unknown='UNKNOWN'
}

export { Settings, AppRoute, AuthStatus };
