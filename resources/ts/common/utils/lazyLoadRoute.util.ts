export const lazyLoadRoute = (asyncView: any) => {
    /**
     * Lazy loads view components with a better UX, showing a loading screen if the
     * component takes a while to load and falling back to a timeout view if the page
     * fails to load.
     * 
     * usage:
     * component: () => lazyLoadRoute(import('path/to/view'));
     */
    const asyncHandler = () => ({
        component: asyncView,
        // Component to use while loading
        loading: '../../sectors/app/_views/LoadingView/LoadingView.vue',
        // Component to show if the request exceeds the timeout
        error: '../../sectors/app/_views/LoadingView/LoadingView.vue',
        // Delay before showing the loading component
        delay: 50,
        // Time to give up loading the component and show the error component
        timeout: 10000,
    })

    return Promise.resolve({
        functional: true,
        render(h: any, {data, children}: {data: any, children: any}) {
            return h(asyncHandler, data, children)
        }
    })
}