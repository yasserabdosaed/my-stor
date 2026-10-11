import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },      // اسم المنتج
  sub: { type: Number, required: true },       // السعر
  img: { type: String, required: true },       // الصورة
  category: { type: String, required: true },  // القسم
  quantity: { type: Number, default: 1 }
});

const Product = mongoose.model('Product', productSchema);

export default Product;