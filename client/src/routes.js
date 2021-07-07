import React from 'react';
import Home from 'src/views/home/Home';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';

const routes = [
    {
        path: 'app',
        element: <DashboardLayout />,
        children: [
            { path: '/', element: <Home /> },
        ]
    },
    {
        path: '/',
        element: <MainLayout />,
        children: [
            // { path: 'login', element: <LoginView /> },
            // { path: '404', element: <NotFoundView /> },
            { path: '/', element: <Home /> },
            // { path: '*', element: <Navigate to="/404" /> }
        ]
    }

];

export default routes;
