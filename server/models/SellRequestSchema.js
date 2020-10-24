import mongoose from 'mongoose';

const { Schema } = mongoose;

mongoose.Promise = global.Promise;
/**
 * SellRequest Schema
 */
const SellRequestSchema = new Schema({
  productName: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },
  carrier: {
    type: String,
    trim: true,
    required: true
  },
  condition: {
    type: String,
    trim: true,
    required: true
  },
  storageSize: {
    type: String,
    trim: true,
    required: true
  },
  price: {
    type: String,
    trim: true,
    required: true
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});


export default mongoose.model('SellRequest', SellRequestSchema);
