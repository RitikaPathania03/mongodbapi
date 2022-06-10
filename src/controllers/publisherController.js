const publisherModel= require("../models/publiserModel")

const createPublisher= async function (req, res) {
    let publisher = req.body
    let PublisherCreated = await publisherModel.create(Publisher)
    res.send({data: PublisherCreated})
}

const getpublishersData= async function (req, res) {
    let publisher = await publisherModel.find()
    res.send({data: publisher})
}

module.exports.createPublisher= createPublisher
module.exports.getPublishersData= getPublishersData