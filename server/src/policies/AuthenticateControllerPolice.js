const Joi = require('@hapi/joi');

module.exports = {
    register (req, res, next) {
        const schema = {
            email: Joi.string(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{8,25}$/)
        }

        const { error } = Joi.validate(req.body, schema)
        
        if(error) {
            switch(error.details[0].context.key) {
                case 'email':
                    res.status(400).send({  
                        error: 'you must a valid email address'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: ` The password provided failed <br>
                            1.- Rule one
                            2.- Rule two
                        `
                    })
                default:
                    res.status(400).send({
                        error: 'Invalid registration'
                    })
            }
        } else {
            next()
        }
    }
}