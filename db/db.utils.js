const getAll = async ( model) => {
    return await model.find()
}

const getOne = async( model, id) => {
    return await model.findById(id)
}

const find = async( model, queryObject, options=[]) => {
    return await model.find(queryObject, options)
}

const createOne = async( model, create) => {
    return await model.create(create)
}

const updateOne = async( model, id, update) => {
    return await model.findByIdAndUpdate(id, update,{returnDocument: 'after'})
}

const deleteOne = async( model, id) => {
    return await model.findByIdAndDelete( id)
}

module.exports = { getAll, getOne, createOne, updateOne, deleteOne, find }