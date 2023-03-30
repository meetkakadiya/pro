import {v4 as uuid} from 'uuid';
import fs from 'fs';
import path_f  from 'path';
import { fileURLToPath } from 'url';

// Database Path
const path = path_f.resolve("./database/db.json");

// Save Product Function
const saveProductData = (data) => {
    const stringifyData = JSON.stringify(data)

    fs.writeFileSync(path, stringifyData)
}

// Get Product Function
const getProductData = () => {
    const jsonData = fs.readFileSync(path)
    return jsonData   
}

// Get Productdata Controller
export const getProductController = (req, res) => {
    try{
        let get_data = []
        let remove_null = []
        get_data = getProductData()
        // console.log(get_data);
        remove_null = get_data.filter(function(el){
          return el != null
        })
        res.status(200).json(JSON.parse(remove_null))
    }catch(e){
        res.status(400).json({success:false, message:`Product data not found!`})
    }
   
}

// Add new Product Controller
export const addProductController = (req, res) => {
    try{
        let current_data = []
        current_data = getProductData()
        let newData = req.body;
        newData.productId = uuid()
        current_data = JSON.parse(current_data.toString())
        current_data.push(newData)
        saveProductData(current_data);
        res.status(200).json({success: true, message: 'product added successfully'})
    }catch(e){
        res.status(400).json({success:false, message:`product not added successfully`})
    }
   
}

// Update Product Data Controller
export const updateProductController = (req, res) => {
    try{
        var current_data = getProductData()
        current_data = JSON.parse(current_data.toString())
        fs.readFile(path, 'utf8', async (err, data) => {
          const productId = req.params['id'];
        await current_data.map((obj, i )=> {
          if(obj.productId === productId){
              current_data[i]=req.body
          }
         });
         saveProductData(current_data);
         res.status(200).json({success: true, message:`products with id ${productId} has been updated`})

        }, true);
    }catch(e){
        res.status(400).json({success:false, message:`products with id ${productId} not updated`})
    }
}

// Delete Product Data Controller
export const deleteProductController = (req, res) => {
    try{
        fs.readFile(path, 'utf8',async (err, data) => {
            var current_data = getProductData()
            current_data = JSON.parse(current_data.toString())
            const userId = req.params['id'];
            await current_data.map((obj, i) => {
              let data_delete = obj.productId === userId
              if(data_delete === true){
                delete current_data[i]
              }
            })
            let remove_null = current_data.filter(function(el){
              return el != null
            })
            // console.log(remove_null)
            saveProductData(remove_null);
            res.status(200).json({success: true, message:`products with id ${userId} has been deleted`})
          }, true);
    }catch(e){
        res.status(400).json({success:false, message:`products with id ${userId} not deleted`})
    }
}
    

    
