import { ReactElement } from "react";


const routes: {
    [key: string] : string,
} = {
    HOME_PAGE: '/',
    CATALOG_PAGE: '/catalog',
    FAVORITES_PAGE: '/favotites',
};

const appRoutes: { path: string, element: ReactElement}[] = [
    {
        path: routes.HOME_PAGE,
        element: <div></div>,
    },
    {
        path: routes.CATALOG_PAGE,
        element: <div></div>,
    },
    {
        path: routes.FAVORITES_PAGE,
        element: <div></div>,
    },
];

export { routes, appRoutes };