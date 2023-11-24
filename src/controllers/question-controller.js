import QuestionService from "../services/question-service.js";
import { StatusCodes } from "http-status-codes";

const questionService = new QuestionService();

export const create = async (req, res) => {
  try {
    const response = await questionService.create(req.body);
    return res.status(StatusCodes.CREATED).json({
      data: response,
      success: true,
      message: "Successfully Created Question",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.BAD_GATEWAY).json({
      data: {},
      success: false,
      message: "Can't Create Question",
      err: error,
    });
  }
};

export const createMany = async (req, res) => {
  try {
    const response = await questionService.createMany(req.body);
    return res.status(StatusCodes.CREATED).json({
      data: response,
      success: true,
      message: "Successfully Created Questions",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.BAD_GATEWAY).json({
      data: {},
      length: response.length,
      success: false,
      message: "Can't Create Questions",
      err: error,
    });
  }
};

export const destroy = async (req, res) => {
  try {
    const response = await questionService.destroy(req.params.id);
    return res.status(StatusCodes.OK).json({
      data: response,
      success: true,
      message: "Successfully Deleted Question",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.BAD_GATEWAY).json({
      data: {},
      success: false,
      message: "Can't Delete Question",
      err: error,
    });
  }
};

export const get = async (req, res) => {
  try {
    const response = await questionService.get(req.params.id);
    return res.status(StatusCodes.OK).json({
      data: response,
      success: true,
      message: "Successfully Fetched Question",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.BAD_GATEWAY).json({
      data: {},
      success: false,
      message: "Can't Fetch Question",
      err: error,
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const response = await questionService.getAll();
    return res.status(StatusCodes.OK).json({
      data: response,
      length: response.length,
      success: true,
      message: "Successfully Fetched All Questions",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.BAD_GATEWAY).json({
      data: {},
      success: false,
      message: "Can't Fetch Questions",
      err: error,
    });
  }
};

export const update = async (req, res) => {
  try {
    const response = await questionService.update(req.params.id, req.body);
    return res.status(StatusCodes.OK).json({
      data: response,
      success: true,
      message: "Successfully Updated Question",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.BAD_GATEWAY).json({
      data: {},
      success: false,
      message: "Can't Update Question",
      err: error,
    });
  }
};
