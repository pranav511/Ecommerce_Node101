const express=require('express');
const router=express.Router();
const {signup,login,showManager}=require('../controllers/manager')

router.post('/',signup);
router.get('/',showManager);
router.post('/login',login);


module.exports=router;