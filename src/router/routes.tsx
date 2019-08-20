import { routeItem } from '../models/route';
import Home from '@views/Home';
import User from '@views/User';

const routes: routeItem[] = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: 'user',
        component: User
    }
]

export default routes;
