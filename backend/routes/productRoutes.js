import express from 'express';
import { getProductController, addProductController, updateProductController, deleteProductController } from '../controllers/productController.js'

const router = express.Router();

// Get product route
router.get('/user', getProductController);

// Add product route
router.post('/add', addProductController);

// Update product by id route
router.put('/user/:id', updateProductController);

// Delete product by od route
router.delete('/delete/:id', deleteProductController);

export default router;