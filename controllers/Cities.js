const service = require("../services.js/Cities")

exports.Cities = async (req, res) => {
    try {

        const resData = service.Cities();
        return res.status(200).send({
            "message":"success",
            "data":resData
        })  
        
    } catch (error) {
    
        res.status(400).send(error);
     
    }
}