/** @jsx jsx */
import { Hono } from 'https://deno.land/x/hono/mod.ts';
import { serveStatic, logger, jsx, html, Fragment } from 'https://deno.land/x/hono/middleware.ts'

const Layout = (props) => html`<!DOCTYPE html>
  <html>
    <head>
      <link rel="stylesheet" href="/static/style.css">
      <title>${props.title}</title>
    </head>
    <body>
      ${props.children}
    </body>
  </html>`

const app = new Hono();

app.use('*', logger())
app.use('*', async (c, next) => {
  c.setRenderer((content, props) => c.html(
    <Layout {...props}>{content}</Layout>
  ))
  await next()
})

app.get('/', (c) => c.render(
  <Fragment>
    <h1 class="text-4xl font-bold">Hello Hono!</h1>
    <p class="text-2xl">Runtime: deno</p>
    <a href="/static/" class="underline">Static File</a>
  </Fragment>
, { title: 'Hello' }));

app.use('/static/*', serveStatic({ root: './assets/' }))
app.use('/favicon.ico', serveStatic({ path: './assets/favicon.ico' }))
app.use('/robots.txt', serveStatic({ path: './assets/robots.txt' }))

Deno.serve(app.fetch);