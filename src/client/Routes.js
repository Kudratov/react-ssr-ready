import React from 'react';

import App from './App';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminsList from './pages/AminsList';

export default [
    {
        ...App,
        routes: [
            {
                path: '/',
                ...HomePage,
                exact: true
            },
            {
                ...AdminsList,
                path: '/admins'
            },
            {
                ...UsersListPage,
                path: '/users'
            },
            {
                ...NotFoundPage
            }
        ]
    }
]