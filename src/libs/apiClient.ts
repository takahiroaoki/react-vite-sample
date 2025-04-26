import axios from 'axios'
import { Example } from './schemas'
import { Path, QueryParam } from './const'

let cacheExample = {} as {
    [param1: string]: Example
}

export class ApiClient {
    static async callExample(param1: string) : Promise<Example|null> {
        if (cacheExample[param1]) {
            return cacheExample[param1]
        }

        const url = new URL(Path.API_EXAMPLE, location.origin)
        url.searchParams.append(QueryParam.PARAM_1, param1)

        const res = await axios.get(url.toString()).then((res) => res).catch((_) => null)
        if (res === null || res.status != 200) {
            return null
        }
        cacheExample[param1] = res.data as Example
        return cacheExample[param1]
    }
}