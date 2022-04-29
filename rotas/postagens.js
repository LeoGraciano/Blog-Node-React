const express = require('express')
const router = express.Router()


router.get('/postagens', (req, res) => {
    res.json(
        {
        post_id: 1,
        titulo: 'Meu primeiro post',
        conteudo: 'Era uma vez, um publicação',
        autor: 'Leonardo Graciano'
        })

})


module.exports = router