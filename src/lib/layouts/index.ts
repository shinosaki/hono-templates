import { html } from 'hono/html';

export const Layout = (props = {}) => html`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="/static/style.css">
  <title>${props.title}</title>
</head>
<body>
  ${props.children}
</body>
</html>`;
