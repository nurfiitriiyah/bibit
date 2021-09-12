const Services = require("../../service/service_movie/index")
const service = new Services()

class Movie {
    async Search(param) {
        try {
            const result = await service.Search(param)
            return result.Search ? result : {
                Search: [],
                totalResults: 0
            }

        } catch (e) {
            throw Error(e)
        }
    }

    async Detail(param) {
        console.log("aa")
        const result = await service.Search(param)
        console.log(result)
        return result
    }
}

module.exports = Movie;
