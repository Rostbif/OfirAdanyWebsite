import mongoose from "mongoose";

// export function createSchemaWithBase(otherSchema: mongoose.Schema) {
//   const baseSchema = new mongoose.Schema({
//     createdAt: {
//       type: Date,
//       immutable: true,
//       required: true,
//       default: () => Date.now(),
//     },
//     updatedAt: { type: Date, required: true, default: () => Date.now() },
//   });

//   baseSchema.pre("save", function (next) {
//     this.updatedAt = new Date(Date.now());
//     if (!this.createdAt) {
//       this.createdAt = new Date(Date.now());
//     }
//     next();
//   });

//   return new mongoose.Schema(Object.assign({}, baseSchema.obj, otherSchema));
// }
