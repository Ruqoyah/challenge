import mongoose from 'mongoose';

const { Schema } = mongoose;

mongoose.Promise = global.Promise;
/**
 * SellRequest Schema
 */
const SellRequestSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  carrier: {
    type: String,
  },
  storageSize: {
    type: String,
    trim: true,
    required: true
  },
  grade: {
    type: String,
    trim: true,
    required: true
  },
  price: {
    type: Number,
    trim: true
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});


export default mongoose.model('SellRequest', SellRequestSchema);
