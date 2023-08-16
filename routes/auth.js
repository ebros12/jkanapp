const { Router } = require('express')
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();


//Funciones del Login
const { logear, newPass, revalidarToken } = require('../controllers/auth');
const { validarJWT } = require('../middlewares/validar-jwt')


router.post(
    "/login",
    [//middlewares
        check('email','email obligatorio').not().isEmpty().isEmail(),
        check('password','password obligatorio').not().isEmpty(),
        validarCampos
    ],
     logear);

router.post(
        "/newPass",
        [//middlewares
            check('email','email obligatorio').not().isEmpty().isEmail(),
            check('password','password obligatorio').not().isEmpty(),
            validarCampos,
        ],
            newPass);

router.get('/renew', validarJWT,revalidarToken)

module.exports = router;
