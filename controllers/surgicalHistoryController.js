const db = require("../utils/db");
import SurgicalHistory from "../models/SurgicalHistory";

export const getAllSurgicalHistories = async (req, res) => {
  try {
    const surgicalHistories = await SurgicalHistory.find({});
    res.status(200).json({ success: true, data: surgicalHistories });
  } catch (error) {
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

export const getSurgicalHistoryById = async (req, res) => {
  const {
    query: { id },
  } = req;

  try {
    const surgicalHistory = await SurgicalHistory.findById(id);

    if (!surgicalHistory) {
      return res
        .status(404)
        .json({ success: false, error: "Surgical History not found" });
    }

    res.status(200).json({ success: true, data: surgicalHistory });
  } catch (error) {
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

export const createSurgicalHistory = async (req, res) => {
  try {
    const surgicalHistory = await SurgicalHistory.create(req.body);
    res.status(201).json({ success: true, data: surgicalHistory });
  } catch (error) {
    res.status(400).json({ success: false, error: "Bad Request" });
  }
};

export const deleteSurgicalHistory = async (req, res) => {
  const {
    query: { id },
  } = req;

  try {
    const deletedSurgicalHistory = await SurgicalHistory.findByIdAndDelete(id);

    if (!deletedSurgicalHistory) {
      return res
        .status(404)
        .json({ success: false, error: "Surgical History not found" });
    }

    res.status(200).json({ success: true, data: deletedSurgicalHistory });
  } catch (error) {
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

export const updateSurgicalHistory = async (req, res) => {
  const {
    query: { id },
    body,
  } = req;

  try {
    const updatedSurgicalHistory = await SurgicalHistory.findByIdAndUpdate(
      id,
      body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedSurgicalHistory) {
      return res
        .status(404)
        .json({ success: false, error: "Surgical History not found" });
    }

    res.status(200).json({ success: true, data: updatedSurgicalHistory });
  } catch (error) {
    res.status(500).json({ success: false, error: "Server Error" });
  }
};
