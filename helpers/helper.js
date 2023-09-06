class Helper {
    static formatMyAPIRes = (res, resStatus, apiStatus, data, apiMessage) => {
        return res.status(resStatus).send({ apiStatus, data, apiMessage })
    }
    static handlingMyFunction = async (req, res, fun, message) => {
        try {
            let result = await fun(req)
            return this.formatMyAPIRes(res, 200, true, result, message)
        } catch (e) {
            if (e.name == 'Error') {
                return this.formatMyAPIRes(res, 200, false,{ error:e.stack,route:req.baseUrl + (req.route.path == '/' ? '' : req.route.path),method:req.method,user:req.user?req.user._id:undefined}, e.message)
            } else if (e.name == 'MongoServerError' || e.name == 'ValidationError' || e.name == 'CastError') {
                 return this.formatMyAPIRes(res, 400, false,{ error:e.stack,route:req.baseUrl + (req.route.path == '/' ? '' : req.route.path),method:req.method,user:req.user?req.user._id:undefined}, e.message)
            } else {
                 return this.formatMyAPIRes(res, 500, false,{ error:e.stack,route:req.baseUrl + (req.route.path == '/' ? '' : req.route.path),method:req.method,user:req.user?req.user._id:undefined}, e.message)
            }
        }
    }
}
module.exports = Helper