const service = require("../services.js/Detail")

exports.Detail = async (req, res) => {
    try {
        const city = req.body.City;
        const resData = await service.Detail(city);
        return res.status(200).send({
            "message":"success",
            "data":resData
        }) 
        
    } catch (error) {
    
        res.status(400).send(error);
     
    }
}