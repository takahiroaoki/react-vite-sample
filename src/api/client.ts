import axios from 'axios'
import { Example } from './schemas'

export class ApiClient {
    static async callExample() : Promise<Example> {
        const url = '/api/example'
        const res = await axios.get(url)
        return res.data as Example
    }
}