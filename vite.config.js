import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { promises as fs } from 'node:fs'
import { createReadStream } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const interactiveSrcDir = path.resolve(__dirname, 'src/assets/interactives')
const interactiveOutDir = path.resolve(__dirname, 'dist/interactives')

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.pdf': 'application/pdf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
}

const copyInteractivesPlugin = () => ({
  name: 'portfolio-copy-interactives',
  apply: 'build',
  async closeBundle() {
    try {
      await fs.rm(interactiveOutDir, { recursive: true, force: true })
      await fs.cp(interactiveSrcDir, interactiveOutDir, { recursive: true })
    } catch (error) {
      console.warn('[copy-interactives] unable to copy interactives', error)
    }
  },
  configureServer(server) {
    server.middlewares.use('/interactives', async (req, res, next) => {
      try {
        const parsed = decodeURIComponent(req.url || '/')
        const relativePath = parsed.replace(/^\/+/, '')
        let targetPath = path.join(interactiveSrcDir, relativePath)
        let stat
        try {
          stat = await fs.stat(targetPath)
        } catch (e) {
          next()
          return
        }

        if (stat.isDirectory()) {
          targetPath = path.join(targetPath, 'index.html')
          stat = await fs.stat(targetPath)
        }

        const ext = path.extname(targetPath).toLowerCase()
        const type = mimeTypes[ext] || 'application/octet-stream'
        res.setHeader('Content-Type', type)
        res.setHeader('Cache-Control', 'no-store')
        createReadStream(targetPath).pipe(res)
      } catch (err) {
        next(err)
      }
    })
  }
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), copyInteractivesPlugin()],
})
