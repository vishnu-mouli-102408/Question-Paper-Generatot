import mongoose from "mongoose";

const QuestionsSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
    enum: ["Easy", "Medium", "Hard"],
  },
  marks: {
    type: Number,
    required: true,
  },
});

const Question = mongoose.model("Question", QuestionsSchema);

export default Question;
