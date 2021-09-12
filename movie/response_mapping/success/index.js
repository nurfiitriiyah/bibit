class Success {

    Paging(data, page, limit, error, total_data) {
        return ({
            data: data ? data : [],
            status: "success",
            error: error ? error : "",
            pagination: {
                page: page,
                limit: limit,
                total: data.length,
                total_page: total_data > 0 ? Math.ceil(total_data / limit) : 0,
                total_data: total_data > 0 ? parseInt(total_data) : 0
            }

        })
    }

    ObjectSuccess(data, error) {
        return ({
            data: data ? data : {},
            status: "success",
            error: error ? error : ""

        })
    }
}


module.exports = new Success()
