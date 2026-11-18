import { defineConfig } from 'vite'

export default defineConfig({
  // 使用相对路径，让游戏部署到 GitHub Pages 的项目子目录后仍能正常加载资源。
  base: './',
})
