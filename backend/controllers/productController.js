import { v2 as cloudinary } from 'cloudinary'
import productModel from '../models/productModel.js'

// Add product
const addProduct = async (req, res) => {
    try {
        const { name, description, price, category, bestseller } = req.body
        const image1 = req.files.image1 && req.files.image1[0]

        const images = [image1].filter((item) => item !== undefined)

        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, {resource_type: 'image'});
                return result.secure_url
            })
        )

        const productData = {
            name,
            description,
            price: Number(price),
            category,
            bestseller: bestseller === "true" ? true : false,
            image: imagesUrl,
        }
        console.log(productData);

        const product = new productModel(productData);
        await product.save()

        res.json({success: true, message: "Product has been added."})

    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

// List products
const listProduct = async (req, res) => {
    try {
        const products = await productModel.find({});
        res.json({success: true, products})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

// Remove product
const removeProduct = async (req, res) => {
    try {
        await productModel.findByIdAndDelete(req.body.id)
        res.json({success: true, message: "Product has been removed."})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

// Single product info
const singleProduct = async (req, res) => {
    try {
        const { productId } = req.body
        const product = await productModel.findById(productId)
        res.json({success: true, product})
    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

export { addProduct, listProduct, removeProduct, singleProduct }