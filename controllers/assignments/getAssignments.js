const { AssignmentModel } = require("../../models/models");

const getAssignments = async (req, res) => {
   try {
      const result = await AssignmentModel.find({});
      res.send(result);
   } catch {
      res.status(500).json({ message: "There was an server error" });
   }
};

module.exports = getAssignments;
