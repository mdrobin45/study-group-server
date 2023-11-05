const { SubmittedAssignmentModel } = require("../../models/models");

const submitAssignment = async (req, res) => {
   try {
      const submittedData = req.body;
      const result = await new SubmittedAssignmentModel(submittedData).save();

      res.status(200).json({
         _id: result._id,
         message: "Assignment submitted",
      });
   } catch {
      res.status(500).json({ message: "There was an server error" });
   }
};

module.exports = submitAssignment;
