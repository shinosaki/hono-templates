# My hono templates
自分用

## Support Runtime
- Cloudflare Workers
- Cloudflare Pages Functions
- Bun
- Node.js
- Deno (enable `--unstable` flag)

## Aliases
You can using alias in `import`, as below:
```js
import { Layout } from '$lib/layouts';
```

| Path | Directory |
| ---- | --------- |
| `$app` | `./src/` |
| `$lib` | `./src/lib/` |
| `$routes` | `./src/lib/routes/` |
| `$db` | `./db/` |

## How to run

### If your using Tailwind CSS
Run `npm run css`

### Cloudflare Workers, Cloudflare Pages Functions
```bash
npm run init:worker
npm run dev:worker
curl http://localhost:8787
```

### Bun
```bash
npm install
npm run dev:bun
curl http://localhost:3000
```

### Node.js
```bash
npm run init:node
npm run dev:node
curl http://localhost:3000
```

### Deno
```bash
npm run dev:deno
curl http://localhost:8000
```

## Database
### Generate schema
1. Create `db/schema.ts`
1. `npm run database`

### Cloudflare D1
1. Create D1 database:  
   `npm run d1:init myapp-db`
1. Migration:  
   `npm run d1 myapp-db`
1. Migration production database:
   `npm run deploy:d1 myapp-db`