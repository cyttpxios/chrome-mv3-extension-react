import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { crx } from '@crxjs/vite-plugin'
import manifest from './manifest.json'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd());
  // 判断是否为开发环境
  const isDev = mode === 'development';

  return {
    root: '.',
    define: {
      //在页面中使用时，使用 import.meta.env.VITE_IS_DEV 来获取是否为开发环境
      'import.meta.env.VITE_IS_DEV': isDev, 
      //在页面中使用时，使用 import.meta.env.VITE_API_URL 来获取 env 中的 API 地址
      'import.meta.env.VITE_API_URL': JSON.stringify(env.VITE_API_URL),
    },
    plugins: [react(), crx({ manifest }),],
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    build: {
      // 使用相对路径，避免在 Windows 上被某些插件再次拼接为混合路径
      outDir: 'dist',
      minify: isDev ? false : 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
          passes: 5, 
        },
        format: {
          comments: false,
        },
        toplevel: true,
        keep_classnames: true,
        keep_fnames: true,
      },

    },
  }
})

