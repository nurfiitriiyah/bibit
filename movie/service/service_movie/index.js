const HTTP = require('../../lib/http/index')
const http = new HTTP()

class ServiceMovie {
    constructor() {
        this.url = 'http://www.omdbapi.com/'
    }

    async Search(param, type) {
        try {
            const result = await http.Get(this.url, {}, param, {})
            if (type === "search") {
                return result.Search ? result : {
                    Search: [],
                    totalResults: 0
                }
            } else {
                return result
            }
        } catch (e) {
            throw  Error(e)
        }
    }

}

module.exports = ServiceMovie;
