const express=require('express');
const router=express.Router();
const userController=require('../controllers/userController');

router.get('/',userController.getUsers);

router.post('/signup',userController.register);

router.post('/login',userController.login);
router.post("/checkCredentials",userController.checkCredentials);

router.put('/:id',userController.update);

router.delete('/:id',userController.delete);


module.exports=router;