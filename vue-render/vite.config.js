import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    server: {
      port: parseInt(env.VITE_PORT) || 3000
    },
    plugins: [vue()],
  };
});
