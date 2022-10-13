const Repair = require( '../database/repair.db')

const getAllRepairs = async() => {
    const allRepairs = await Repair.getAllRepairs()
    return allRepairs
}

const getRepair = async( id) => {
    const repair = await Repair.getRepair( id)
    return repair
}

const createRepair =  async( newRepair) => {
    const createdRepair = await Repair.createRepair( newRepair)
    return createdRepair
}

const updateRepair = async( id, updates) => {
    const updatedRepair = await Repair.updateRepair(id, updates)
    return updatedRepair
}

const deleteRepair = async( id) => {
    return await Repair.deleteRepair( id)
}

module.exports = {
    getAllRepairs,
    getRepair,
    createRepair,
    updateRepair,
    deleteRepair
}