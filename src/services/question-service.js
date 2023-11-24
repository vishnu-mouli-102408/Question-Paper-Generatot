import QuestionRepository from "../repository/question-repository.js";

class QuestionService {
  constructor() {
    this.questionRepository = new QuestionRepository();
  }

  async create(data) {
    try {
      const response = await this.questionRepository.create(data);
      return response;
    } catch (error) {
      console.log("Error Occured in Service Layer");
      throw error;
    }
  }

  async createMany(data) {
    try {
      const response = await this.questionRepository.createMany(data);
      return response;
    } catch (error) {
      console.log("Error Occured in Service Layer");
      throw error;
    }
  }

  async destroy(id) {
    try {
      const response = await this.questionRepository.destroy(id);
      return response;
    } catch (error) {
      console.log("Error Occured in Service Layer");
      throw error;
    }
  }

  async get(id) {
    try {
      const response = await this.questionRepository.get(id);
      return response;
    } catch (error) {
      console.log("Error Occured in Service Layer");
      throw error;
    }
  }

  async getAll() {
    try {
      const response = await this.questionRepository.getAll();
      return response;
    } catch (error) {
      console.log("Error Occured in Service Layer");
      throw error;
    }
  }

  async update(id, data) {
    try {
      const response = await this.questionRepository.update(id, data);
      return response;
    } catch (error) {
      console.log("Error Occured in Service Layer");
      throw error;
    }
  }
}

export default QuestionService;
