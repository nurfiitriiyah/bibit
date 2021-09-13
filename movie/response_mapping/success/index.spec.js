const {ObjectSuccess,Paging} = require("./index")
describe('Success response mapping', () => {
    it('Error object', () => {
        const data ={
            "data": {},
            "error": "",
            "status": "success"
        }
        expect(ObjectSuccess({})).toEqual(data)
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
            "status": "success"
        }
        expect(Paging([], 1,10,"nok")).toEqual(data)
    });
});
