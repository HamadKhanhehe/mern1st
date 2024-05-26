import express from 'express';
import { Register, login } from '../controllers/auth.js';

const router = express.Router();

router.post('/login' , login );
router.post('/register' , Register );


export default router;