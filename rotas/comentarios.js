const express = require('express')
const router = express.Router()

router.get('/comentarios/:postId', (req, res) => {
    res.json(
         {
        conteudo: 'Comentário',
        autor: 'Jessica'
        })

})

module.exports = router