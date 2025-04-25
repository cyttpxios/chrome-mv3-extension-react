import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { crx } from '@crxjs/vite-plugin'
import manifest from './manifest.json'


// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {

  const env = loadEnv(mode, process.cwd());
  // 判断是否为开发环境
  const isDev = mode === 'development';

  return {
    root: '.',
    define: {

    },
    plugins: [react(), crx({ manifest }),],
  }
})

