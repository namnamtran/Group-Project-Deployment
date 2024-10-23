const { Schema, model, models, default: mongoose } = require("mongoose");

const ProductSchema = new Schema({
    title: {type: String, required:true},
    description: String,
    sku: String,
    // size: {type: Number, required:true},
    size: [{ type: String }],
    price: {type: String, required:true},
    stock: {type: Number, required:true},
    condition: {type: String, required:true},
    images: [{type: String}],
    category: {type: mongoose.Types.ObjectId, ref:'Category'},
},{
    timestamps: true,

    
});

export const Product = mongoose.models.Product || model('Product',ProductSchema);
