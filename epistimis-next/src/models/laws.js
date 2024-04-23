import mongoose, { Schema } from "mongoose";

// Define the schema
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

// Check if the model already exists, if not, create it
const Laws = mongoose.models.Laws || mongoose.model("Laws", lawSchema);

export default Laws;
