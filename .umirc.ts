import { defineConfig } from 'umi';
import routers from './src/routers';

export default defineConfig({
  title: 'WebGL',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routers,
  fastRefresh: {},
  // mfsu: {},
  webpack5: {},
  esbuild: {},
  dynamicImport: {},
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
});
