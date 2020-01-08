
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  history: 'hash',
  routes: [{
    path: '/',
    component: '../layouts',
    routes: [
      {
        path: '/',
        component: 'overall',
      },
      {
        path: '/overall',
        component: 'overall',
      },
      {
        path: '/dashboard',
        component: 'dashboard'
      },
      {
        path: '/device',
        routes: [
          { path: '/device/binding', component: 'device/device_binding' },
          { path: '/device/list', component: 'device/device_list' },
          { path: '/device/model', component: 'device/device_model' }
        ]
      },
      {
        path: '/strategy',
        routes: [
          { path: '/strategy/data', component: 'strategy/strategy_data' },
          { path: '/strategy/upload', component: 'strategy/strategy_upload' },
          { path: '/strategy/control', component: 'strategy/strategy_control' }
        ]
      },
    ]
  }],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'lot-platform-umi',
      dll: true,
      locale: {
        enable: true,
        default: 'en-US',
      },
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}
