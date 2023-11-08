const { AssignmentModel } = require("../../models/models");

const addMultiple = async (req, res) => {
   try {
      const assignmentData = req.body;
      const result = await AssignmentModel.insertMany(assignmentData);

      res.status(200).json({ _id: result._id, message: "Assignments added" });
   } catch {
      res.status(500).json({ message: "There was an server error" });
   }
};

module.exports = addMultiple;
