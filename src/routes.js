import React from 'react';

//all pages

const Profile = React.lazy(() => import('./pages/Profile'));
const OrderSummary = React.lazy(() => import('./pages/OrderSummary'));


const routes = [
  { path: '/profile', name: 'Profile', component: Profile },
  { path: '/order-summary', name: 'OrderSummary', component: OrderSummary },
];

export default routes;
