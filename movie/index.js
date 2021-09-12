const express = require("express")
const app = express();
const controller_movie = require("./controller/controller_movie/index")
const middleware_movie = require("./middleware/middleware_movie/index")
const {LoggerSave} = require("./middleware/middleware_logger/index")

const con_movie = new controller_movie()
const mid_movie = new middleware_movie()

const {Paging, ObjectSuccess} = require("./response_mapping/success")
const {PagingError, Object} = require("./response_mapping/error")


app.get('/search', mid_movie.CheckParam, LoggerSave, async (req, res) => {
    try {
        console.log("sss")
        const result = await con_movie.Search(req.query)
        res.send(Paging(result.Search, req.query.page, 10, "", result.totalResults))
    } catch (e) {
        res.status(500).send(PagingError([], req.query.page, 10, e.message))
    }
});
app.get('/detail/:id', mid_movie.CheckId, async (req, res) => {
    try {
        const result = await con_movie.Detail(req.query)
        res.send(ObjectSuccess(result, ""))
    } catch (e) {
        res.status(500).send(Object(e.message))
    }

});
app.listen(3001, () => console.log('Server Running at http://localhost:3001'));
