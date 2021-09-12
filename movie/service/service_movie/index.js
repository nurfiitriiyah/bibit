const HTTP = require('../../lib/http/index')
const http = new HTTP()

class ServiceMovie {
    constructor() {
        this.url = 'http://www.omdbapi.com/'
    }

    async Search(param) {
        try{
            return await http.Get(this.url, {}, param, {})
        }catch (e) {
            throw  Error(e)
        }
    }

}

module.exports = ServiceMovie;
