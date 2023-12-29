import { create, router as _router, defaults } from 'json-server';
const server = create()
const router = _router("db.json")
const middlware = defaults()
const port = process.env.PORT || 3001

server.use(middlware)
server.use(router)

server.listen(port)