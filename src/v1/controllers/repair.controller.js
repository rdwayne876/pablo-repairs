const repairService = require( '../services/repair.service')

const getAllRepairs = async( req, res) => {
    try {
        repairs = await repairService.getAllRepairs()

        res.status( 200).json({
            status: "OK",
            data:{
                repairs
            }
        })
    } catch (error) {
        res
        .status(error?.status || 500)
        .json({ status: "FAILED", data: { error: error?.message || error } })
    }
}

const getRepair = async( req, res) => {

    const { params: id} = req

    if( !id){
        res.status( 400).json({
            status: "FAILED",
            data: {
                error: "not found"
            }
        })
        return
    }
    try {
        const repair = await repairService.getRepair( id)

        res.status( 200).json({
            status: "OK",

            data: {
                repair
            }
        })
    } catch (error) {
        res
        .status(error?.status || 500)
        .json({ status: "FAILED", data: { error: error?.message || error } })
    }
}

const createRepair = async( req, res) => {

    const { body} = req

    if( !body.title ||
        !body.description ||
        !body.userID) {
            res.status( 400).json({
                status: "FAILED",
                data:{
                    error: "All fields required"
                }
            })
        return
    }

    const newRepair = {
        userID: req.user.user,
        title: body.title,
        description: body.description
    }
    
    try {
        const createdRepair = await repairService.createRepair( newRepair)

        res.status( 201).json({
            status: "OK",
            data: {
                createdRepair
            }
        })
    } catch (error) {
        res
        .status(error?.status || 500)
        .json({ status: "FAILED", data: { error: error?.message || error } })
    }
}

const updateRepair = async( req, res) => {
    
    const { body, params: id} = req

        if( !id){
            res.status( 400).json({
                status: "FAILED",
                data: {
                    error: "Not found"
                }
            })
            return
        }

    try {
        const updatedRepair = await repairService.updateRepair( id, body)

        res.status( 200).json({
            status: "OK",
            data:{
                updatedRepair
            }
        })
    } catch (error) {
        res
        .status(error?.status || 500)
        .json({ status: "FAILED", data: { error: error?.message || error } })
    }
}

const deleteRepair = async( req, res) => {
    const { params: id} = req

    if( !id) {
        res.status( 400).json({
            status: "FAILED",
            data: {
                error: "Not found"
            }
        })
    }
    
    try {
        await repairService.deleteRepair( id)

        res.status( 204)
    } catch (error) {
        res
        .status(error?.status || 500)
        .json({ status: "FAILED", data: { error: error?.message || error } })
    }
}

module.exports = {
    getAllRepairs,
    getRepair,
    createRepair,
    updateRepair, 
    deleteRepair
}