const axios = require("axios")

class Http {
    async Send(url, body, param, headers, method) {
        const config = {
            method: method,
            url: url,
            params: param,
            body: body,
            headers: headers
        }
        const result = await axios(config);
        return result.data

    }
    async Get(url, body, param, headers) {

        return await this.Send(url, body, param, headers, "GET");
    }
}

module.exports = Http;
