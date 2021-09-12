class Error {
    PagingError(data, page, limit, error) {
        return ({
            data:[],
            status: "failed",
            error: error?error:"",
            pagination: {
                page: page,
                limit: limit,
                total:0,
                total_page:0,
                total_data:0
            }

        })
    }

    Object(error) {
        return ({
            data:{},
            status: "failed",
            error: error?error:""
        })
    }
}

module.exports=new Error();
