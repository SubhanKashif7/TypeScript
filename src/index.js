var apiReq = function (url, headers) {
    var res = fetch(url, headers).then(function (response) {
        return response.json;
    });
};
