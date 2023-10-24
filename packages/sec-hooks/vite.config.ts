import { defineConfig } from 'vite'
import path from 'path'

function resolve(str: string) {
  return path.resolve(__dirname, str)
}

export default defineConfig(async ({ command, mode }) => {
  return {
    build: {
      rollupOptions: {
        external: ['react']
      },
      outDir: 'dist',
      lib: {
        entry: path.resolve(__dirname, 'src/index.ts'),
        name: '@chehejia/sec-hooks',
        fileName: 'index',
        formats: ['es']
      }
    }
    // resolve: {
    //   alias: await alias()
    // }
  }
})
