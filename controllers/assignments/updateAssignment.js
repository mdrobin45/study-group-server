const { AssignmentModel } = require("../../models/models");

const updateAssignment = async (req, res) => {
   try {
      const assignmentId = req.params.id;
      const updatedAssignmentDetails = req.body;

      const result = await AssignmentModel.findByIdAndUpdate(
         assignmentId,
         updatedAssignmentDetails
      );
      res.status(200).json({ _id: result._id, message: "Update successful" });
   } catch {
      res.status(500).json({ message: "There was an server error" });
   }
};

module.exports = updateAssignment;
