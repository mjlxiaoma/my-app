import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import { resolve } from "path"

export default defineConfig({
  plugins: [react()],
  // 配置路径别名
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
})
