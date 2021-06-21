import Dashboard from './views/Dashboard.js';
import Posts from './views/Posts.js';
import MorePosts from './views/MorePosts.js';
import Settings from './views/Settings.js';

const navigateTo = (path) => {
    history.pushState(null, null, path);
    router();
}

const router = async () => {

    const routes = [
        {
            path: "/dashboard",
            view: Dashboard
        },
        {
            path: "/posts",
            view: Posts
        },
        {
            path: "/moreposts",
            view: MorePosts
        },
        {
            path: "/settings",
            view: Settings
        }
    ];

    const prospectedRoutes = routes.map(route => ({ ...route, isMatched: location.pathname === route.path }));
    let mathcedRoute = prospectedRoutes.find(route => route.isMatched);
    if (!mathcedRoute) {
        mathcedRoute = {
            ...routes[0],
            isMatched: true
        }
    }
    const view = new mathcedRoute.view();
    document.querySelector('#views').innerHTML = await view.render();
}

window.addEventListener('popstate', router);
window.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (e) => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    router();
})