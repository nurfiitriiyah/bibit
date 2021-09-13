const {Object,PagingError} = require("./index")
describe('Error response mapping', () => {
    it('Error object', () => {
        const data = {"data": {}, "error": "nok", "status": "failed"}
        expect(Object("nok")).toEqual(data)
    });
    it('Error pagin', () => {
        const data ={
            "data": [],
            "error": "nok",
            "pagination": {
                "limit": 10,
                "page": 1,
                "total": 0,
                "total_data": 0,
                "total_page": 0
            },
            "status": "failed"
        }
        expect(PagingError([], 1,10,"nok")).toEqual(data)
    });
});
