import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'
import APP from './app.tsx'

const app = new Hono()

app.route('/', APP)

app.use('/static/*', serveStatic({ root: './assets/' }))
app.use('/favicon.ico', serveStatic({ path: './assets/favicon.ico' }))
app.use('/robots.txt', serveStatic({ path: './assets/robots.txt' }))

export default app
