const {insert} = require("../../config/config_mysql/index")

class MiddlewareLogger {
    async LoggerSave(req, res, next) {
        const data = {
            logs_req: JSON.stringify(req.query),
            logs_path: req.route.path
        }
        await insert(data, "tb_logs")
        next()
    }
}

module.exports = new MiddlewareLogger()
