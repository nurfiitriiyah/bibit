const {PagingError} = require("../../response_mapping/error")

class MiddlewareMovie {
    CheckParam(req, res, next) {
        req.query.page === undefined ? (req.query['page'] = 1) : req.query['page'] = req.query.page
        if (!req.query.s) {
            res.status(400).json(PagingError([], req.query.page, 10,"s is required"))
        } else {
            req.query.page === undefined ? (req.query['page'] = 1) : req.query['page'] = req.query.page
            req.query['apiKey'] = 'faf7e5bb'
            next()
        }
    }

    CheckId(req, res, next) {
        req.query['apiKey'] = 'faf7e5bb'
        req.query['i'] = req.params.id
        next()
    }
}

module.exports = MiddlewareMovie;
