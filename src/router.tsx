import { Outlet, RootRoute, Route, Router } from '@tanstack/react-router'

import { AuthRoute } from 'auth/AuthRoute'

const rootRoute = new RootRoute({
	component: () => <Outlet />
})

const authenticatedRoute = new Route({
	getParentRoute: () => rootRoute,
	path: '/',
	component: AuthRoute
})

const routeTree = rootRoute.addChildren([authenticatedRoute])

export const router = new Router({ routeTree })
