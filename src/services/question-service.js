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

  async updateMultiple(data) {
    try {
      const response = await this.questionRepository.updateMultiple(data);
      return response;
    } catch (error) {
      console.log("Error Occured in Service Layer");
      throw error;
    }
  }

  async filterQuestions(difficulty) {
    try {
      const data = await this.questionRepository.getAll();
      const response = data.filter(
        (question) => question.difficulty === difficulty
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  getRandomSubset(arr, targetSum) {
    let currentSum = 0;
    const selectedQuestions = [];

    while (currentSum !== targetSum) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      const randomQuestion = arr[randomIndex];

      if (currentSum + randomQuestion.marks <= targetSum) {
        selectedQuestions.push(randomQuestion);
        currentSum += randomQuestion.marks;
      }
    }

    return selectedQuestions;
  }

  async generatePaper(totalMarks, easyP, mediumP, hardP) {
    const easyMarks = totalMarks * (easyP / 100);
    const mediumMarks = totalMarks * (mediumP / 100);
    const hardMarks = totalMarks * (hardP / 100);

    const easyQ = await this.filterQuestions("Easy");
    const mediumQ = await this.filterQuestions("Medium");
    const hardQ = await this.filterQuestions("Hard");

    const sEasyQ = this.getRandomSubset(easyQ, easyMarks);
    const sMediumQ = this.getRandomSubset(mediumQ, mediumMarks);
    const sHardQ = this.getRandomSubset(hardQ, hardMarks);

    return [...sEasyQ, ...sHardQ, ...sMediumQ];
  }
}

export default QuestionService;
