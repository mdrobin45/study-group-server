const { SubmittedAssignmentModel } = require("../../models/models");

const getSingleSubmittedAssignment = async (req, res) => {
   try {
      const id = req.params.id;
      const result = await SubmittedAssignmentModel.findById(id).populate(
         "assignment"
      );
      res.send(result);
   } catch {
      res.status(500).json({ message: "There was an server error" });
   }
};

module.exports = getSingleSubmittedAssignment;
