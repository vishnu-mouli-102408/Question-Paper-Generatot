import Question from "../models/questions.js";

class QuestionRepository {
  async create(data) {
    try {
      const response = await Question.create(data);
      return response;
    } catch (error) {
      console.log("Error Occured in Repository Layer");
      throw error;
    }
  }

  async destroy(id) {
    try {
      const response = await Question.findByIdAndDelete(id);
      return true;
      return;
    } catch (error) {
      console.log("Error Occured in Repository Layer");
      throw error;
    }
  }

  async get(id) {
    try {
      const response = await Question.findById(id);
      return response;
    } catch (error) {
      console.log("Error Occured in Repository Layer");
      throw error;
    }
  }

  async getAll() {
    try {
      const response = await Question.find({});
      return response;
    } catch (error) {
      console.log("Error Occured in Repository Layer");
      throw error;
    }
  }

  async update(id, data) {
    try {
      const response = await Question.findByIdAndUpdate(id, data, {
        new: true,
      });
      return response;
    } catch (error) {
      console.log("Error Occured in Repository Layer");
      throw error;
    }
  }
}

export default QuestionRepository;
