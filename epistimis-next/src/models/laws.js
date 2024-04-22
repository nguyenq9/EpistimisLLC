import mongoose, { Schema } from "mongoose";

const lawSchema = new Schema({
    jurisdiction: {
      type: String,
      required: true,
      unique: true,
    },
    filterCategories: {
      type: Array,
    },
    privacyLaws: {
      type: Array,
    },
    otherPrivacyLaws: {
      type: Array,
    },
  });

// Creating a mongoose model
const Laws = mongoose.model.Laws || mongoose.model("Laws", lawSchema);

export default Laws;