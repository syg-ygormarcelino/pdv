import express from "express"

export const routes = express.Router()

routes.get('/', async (req, res) => {
    res.json({
        code: 200,
        description: 'Ok'
    })
})