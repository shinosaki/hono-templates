import { Hono } from 'hono'
import { getRuntimeKey } from 'hono/adapter'
import { Fragment } from 'hono/jsx'
import { Layout } from '$lib/layouts'

const app = new Hono()

app.use('*', async (c, next) => {
  c.setRenderer((content, props) => c.html(
    <Layout {...props}>
      {content}
    </Layout>
  ))
  await next()
})

app.get('/', (c) => c.render(
  <Fragment>
    <h1 class="text-4xl font-bold">Hello Hono!</h1>
    <p class="text-2xl">Runtime: {getRuntimeKey()}</p>
    <a href="/static/" class="underline">Static File</a>
  </Fragment>
, { title: 'Hello' }));

export default app
