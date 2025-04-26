import { http, HttpResponse } from 'msw'
import example from './response/example.json'

export const handlers = [
  http.get('/api/example', () => {
    return HttpResponse.json(example, { status: 200 })
  }),
]