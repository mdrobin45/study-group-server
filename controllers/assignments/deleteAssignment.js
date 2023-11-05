const { AssignmentModel } = require("../../models/models");

const deleteAssignment = async (req, res) => {
   try {
      const assignmentId = req.params.id;
      const result = await AssignmentModel.findByIdAndDelete(assignmentId);
      res.status(200).json({ _id: result._id, message: "Delete successful" });
   } catch {
      res.status(500).json({ message: "There was an server error" });
   }
};

module.exports = deleteAssignment;
