const { SubmittedAssignmentModel } = require("../../models/models");

const updateSubmittedAssignment = async (req, res) => {
   try {
      const assignmentId = req.params.id;
      const updateStatus = req.body;

      const result = await SubmittedAssignmentModel.findByIdAndUpdate(
         assignmentId,
         updateStatus
      );
      res.status(200).json({ _id: result._id, message: "Marking successful" });
   } catch {
      res.status(500).json({ message: "There was an server error" });
   }
};

module.exports = updateSubmittedAssignment;
