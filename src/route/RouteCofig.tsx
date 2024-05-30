// const Router = [];

// export default Router;

import Dashboard from '..views/common-page/Dashboard';
const Router: IRouteType.IRouer[] = [
  {
    path: '/',
    emement: <Dashboard />,
    meta: { pageTitle: 'home' }
  }
];

export default Router;