import FavoritePage from '../views/pages/favoritePage';
import HomePage from '../views/pages/homePage';
import gamePage from '../views/pages/gamePage';
import clubPage from '../views/pages/clubPage';
import detailLeaguePage from '../views/pages/detailLeaguePage';

const routes = {
  '/': HomePage,
  '/favorite-page': FavoritePage,
  '/detail-league-page': detailLeaguePage,
  '/game-page' : gamePage,
  '/teams/:id': clubPage,
};

export default routes;
