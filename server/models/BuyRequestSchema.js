import mongoose from 'mongoose';

const { Schema } = mongoose;

mongoose.Promise = global.Promise;
/**
 * BuyRequest Schema
 */
const BuyRequestSchema = new Schema({
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
  storageSize: {
    type: String,
    trim: true,
    required: true
  },
  new: {
    type: String,
    trim: true,
    required: true
  },
  a1: {
    type: String,
    trim: true,
    required: true
  },
  a2: {
    type: String,
    trim: true,
    required: true
  },
  b1: {
    type: Number,
    trim: true,
    required: true
  },
  b2: {
    type: String,
    trim: true,
    required: true
  },
  c: {
    type: Array,
    trim: true,
    required: true
  },
  cb: {
    type: String,
    trim: true,
    required: true
  },
  cd: {
    type: String,
    trim: true,
    required: true
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});


export default mongoose.model('BuyRequest', BuyRequestSchema);
