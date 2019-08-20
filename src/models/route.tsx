export interface routeItem {
    path: string;
    component: any;
    exact?: boolean;
    childRoutes?: routeItem[];
    [keyName: string]: any
}