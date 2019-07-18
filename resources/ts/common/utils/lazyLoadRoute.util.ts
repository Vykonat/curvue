export const lazyLoadRoute = (asyncView: any) => {
  const asyncHandler = () => ({
    component: asyncView,
    loading: '../../sectors/app/_views/LoadingView/LoadingView.vue',
    error: '../../sectors/app/_views/LoadingView/LoadingView.vue',
    delay: 50,
    timeout: 10000
  });

  return Promise.resolve({
    functional: true,
    render(h: any, { data, children }: { data: any; children: any }) {
      return h(asyncHandler, data, children);
    }
  });
};
