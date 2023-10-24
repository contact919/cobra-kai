import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: 'http://localhost:3006',
    host: true,
    port: 3006,
    proxy: {
      '/biz': {
        target: 'https://fusion-soc.ontest.k8s.chj.cloud',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/biz/, '')
      },
      '/mgmt': {
        target: 'https://liid-ontest.lixiang.com',
        changeOrigin: true
      }
    }
  },
  resolve: {
    alias: [{ find: /^@\//, replacement: path.join(__dirname, 'src/') }]
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `
          @import '@chehejia/cfe-ui/theme-default.less';
        `
      }
    }
  }
})
