// import mongoose from "mongoose";

// export function mongooseConnect() {

//     if(mongoose.connection.readyState === 1){
//         return mongoose.connection.asPromise();
//     }
//     else{
//         const uri = process.env.MONGODB_URI;
//         return mongoose.connect(uri);
//     }
// }

import mongoose from "mongoose";

export async function mongooseConnect() {
  const uri = process.env.MONGODB_URI;

  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  } else {
    return mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
}
