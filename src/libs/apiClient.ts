import axios from 'axios'
import { Example } from './schemas'

export class ApiClient {
    static async callExample(param1: string) : Promise<Example|null> {
        const url = `/api/example?param1=${param1}`
        const res = await axios.get(url).then((res) => res).catch((_) => null)
        if (res === null || res.status != 200) {
            return null
        }
        return res.data as Example
    }
}