import mongoose, { version } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
import slugify from "slugify";

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minlength: 3,
            unique: true,
        },
        slug: {
            type: String,
            unique: true,
        },
        price: {
            type: Number,
            required: true,
        },
        image_url: {
            type: String,
            required: true,
        },
        // attributes: [
        //     {
        //         type: mongoose.Schema.Types.ObjectId,
        //         ref: "Attribute",
        //         required: true,
        //     },
        // ],
        quantity: {
            type: Number,
            default: 1,
        },
        description: {
            type: String,
        },
        rating: {
            type: Number,
            min: 0,
            max: 5,
        },
        reviews: {
            type: Number,
            default: 0,
        },
        // category: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: "Category",
        // },
        tags: [String],
        sku: {
            type: String,
            required: true,
        },
        status: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true, versionKey: false }
);

// Middleware để tự động tạo slug từ tên sản phẩm
ProductSchema.pre("save", function (next) {
    if (this.isModified("name")) {
        this.slug = slugify(this.name, { lower: true, strict: true });
    }
    next();
});

ProductSchema.plugin(mongoosePaginate);

export default mongoose.model("Product", ProductSchema);