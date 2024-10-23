// import { mongooseConnect } from "@/lib/mongoose";
// import { Product } from "@/models/Product";

// export default async function handle(req, res) {
//   await mongooseConnect();
//   const { categories, sortField, sortOrder, search } = req.query;

//   try {
//     let productsQuery = {};

//     // Add category filtering if categories are provided
//     if (categories) {
//       const categoryList = categories.split(",");
//       productsQuery = { categories: { $in: categoryList } };
//     }

//     // // Add search query if provided
//     // if (search) {
//     //   productsQuery.name = { $regex: search, $options: "i" };
//     // }

//     const products = await Product.find(productsQuery).sort({
//       [sortField]: sortOrder === "asc" ? 1 : -1,
//     });

//     res.json(products);
//   } catch (error) {
//     console.error("Error searching products:", error);
//     res.status(500).json({ error: "An error occurred while searching products" });
//   }
// }


import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default async function handle(req, res) {
  await mongooseConnect();
  const { categories, sortField, sortOrder, search } = req.query;

  try {
    let productsQuery = {};

    // Add category filtering if categories are provided
    if (categories) {
      const categoryList = categories.split(",");
      productsQuery = { categories: { $in: categoryList } };
    }

    // Add search query if provided
    // if (search) {
    //   productsQuery.title = { $regex: search, $options: "i" };
    // }
    if (search) {
        productsQuery.$or = [
          { title: { $regex: search, $options: "i" } },
          { sku: { $regex: search, $options: "i" } }
        ];
      }
    

    const products = await Product.find(productsQuery).sort({
      [sortField]: sortOrder === "asc" ? 1 : -1,
    });

    res.json(products);
  } catch (error) {
    console.error("Error searching products:", error);
    res.status(500).json({ error: "An error occurred while searching products" });
  }
}



// import { mongooseConnect } from "@/lib/mongoose";
// import { Product } from "@/models/Product";

// export default async function handle(req, res) {
//   await mongooseConnect();
//   const { categories, sortField, sortOrder } = req.query;

//   try {
//     let productsQuery = {};

//     // Add category filtering if categories are provided
//     if (categories) {
//       const categoryList = categories.split(","); // Assuming categories are comma-separated
//       productsQuery = { categories: { $in: categoryList } };
//     }

//     const searchQuery = req.query.search;

//     if (searchQuery) {
//       // Perform a text search on the 'name' field
//       productsQuery.$text = { $search: searchQuery };
//     }

//     const products = await Product.find(productsQuery, { score: { $meta: "textScore" } })
//       .sort({ score: { $meta: "textScore" }, [sortField]: sortOrder === "asc" ? 1 : -1 });

//     res.json(products);
//   } catch (error) {
//     console.error("Error searching products:", error);
//     res.status(500).json({ error: "An error occurred while searching products" });
//   }
// }

