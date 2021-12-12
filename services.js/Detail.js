const DetailsMockData = require("../utils/Mock.Details.json")

exports.Detail = function(city) {
    var data = DetailsMockData[city]
    return data
};