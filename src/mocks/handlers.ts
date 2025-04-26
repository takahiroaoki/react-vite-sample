import { http, HttpResponse } from 'msw'
import example from './response/example.json'

type paramsMap = {
  [key: string]: string
}

export const handlers = [
  http.get('/api/example', (req) => {
    const paramsStr = req.request.url.split('?')[1]
    const params: paramsMap = {}
    paramsStr.split('&').forEach((param) => {
      params[param.split('=')[0]] = param.split('=')[1]
    })

    switch (params.param1) {
      case 'success':
        return HttpResponse.json(example, { status: 200 })
      default:
        return HttpResponse.json(null, { status: 404 })
    }
  }),
]