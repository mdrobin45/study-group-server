const { AssignmentModel } = require("../../models/models");

const addSingleAssignment = async (req, res) => {
   try {
      const assignmentData = req.body;
      const result = await new AssignmentModel(assignmentData).save();

      res.status(200).json({ _id: result._id, message: "Assignment added" });
   } catch {
      res.status(500).json({ message: "There was an server error" });
   }
};

module.exports = addSingleAssignment;
