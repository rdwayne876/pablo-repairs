const Repair = require( '../models/repair.model')

const { getAll, getOne, createOne, updateOne, deleteOne } = require( '../../../db/db.utils')

const getAllRepairs = async() => {
    try{
        return getAll( Repair)
    } catch ( error) {
        throw {
            status: 500,
            message: error?.message || error
        }
    }
}

const getRepair = async( id) => {
    try {
        return getOne( Repair, id)
    } catch (error) {
        throw {
            status: 500,
            message: error?.message || error
        }
    }
}

const createRepair = async( newRepair) => {
    try {
        return createOne( Repair, newRepair)
    } catch (error) {
        throw {
            status: 500,
            message: error?.message || error
        }
    }
}

const updateRepair = async( id, updates) => {
    try {
        return updateOne( Repair, id, updates)
    } catch (error) {
        throw {
            status: 500,
            message: error?.message || error
        }
    }
}

const deleteRepair = async( id) => {
    try {
        return deleteOne( Repair, id)
    } catch (error) {
        throw {
            status: 500,
            message: error?.message || error
        }
    }
}

module.exports = { getAllRepairs, getRepair, createRepair, updateRepair, deleteRepair}