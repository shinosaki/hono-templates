import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import APP from './app.tsx'

const app = new Hono()

app.route('/', APP)

app.use('/static/*', serveStatic({ root: '.' }))
app.use('/favicon.ico', serveStatic({ path: './favicon.ico' }))
app.use('/robots.txt', serveStatic({ path: './robots.txt' }))

export default app
