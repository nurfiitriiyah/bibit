const Services = require("../../service/service_movie/index")
const service = new Services()

class Movie {
    async Search(param) {
        try {
            return await service.Search(param, 'search')

        } catch (e) {
            throw Error(e)
        }
    }

    async Detail(param) {
        try {
            return  await service.Search(param, 'detail')
        } catch (e) {
            throw Error(e)

        }
    }
}

module.exports = Movie;
