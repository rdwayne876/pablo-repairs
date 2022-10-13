const authService = require( '../services/auth.service')

const registerUser = async( req, res) => {
    const { body } = req

    if( 
        !body.firstName ||
        !body.lastName ||
        !body.email ||
        !body.password ||
        !body.cellPhone

    ) {
        res.status( 400).json({
            status: "FAILED",
            data: {
                error: "All fields are required" 
            }
        })
        return
    }

    try {
        const newUser = {
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email, 
            cellPhone: body.cellPhone,
        }
        const registeredUser = await authService.registerUser( newUser, body.password)

        res.status( 201).json({
            status: "SUCCESS",
            data: registeredUser
        })
    } catch (error) {
        console.error(error);
        res
          .status(error?.status || 500)
          .json({ status: "FAILED", data: { error: error?.message || error } });
      }
}

const login = async( req, res) => {
    const { body} = req

    if( !body.email || !body.password) {
        res.status( 400).json({
            status: "FAILED",
            data: {
                error: "All fields required"
            }
        })
    }

    try {
        const user = await authService.login( body.email, body.password)

        res.status( 200).json({
            status: "SUCCESS",
            data: user
        })
        
    } catch (error) {
        res
          .status(error?.status || 500)
          .json({ status: "FAILED", data: { error: error?.message || error } });
    }
}

module.exports ={
    registerUser,
    login
}