import Login from '../Auth/Login';
import Register from '../Auth/Register';
import NotFound from '../Partials/NotFound';
import Container from '../Main/Container';
import Main from '../Main/Main';
export default [
    {
        path: '/auth/login',
        component: Login
    },
    {
        path: '/auth/register',
        component: Register
    },
    {
        path: '/dashboard',
        component: Main
    },
    {
        path: '/',
        component: Main
    },
    {
        component: NotFound
    }
];