import mongoose, { Schema } from "mongoose";

// Define the schema
const usLawSchema = new Schema({
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
const usLaws = mongoose.models.usLaws || mongoose.model("usLaws", usLawSchema);

export default usLaws;
