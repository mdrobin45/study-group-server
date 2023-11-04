const { AssignmentModel } = require("../../models/models");

const getSingleAssignment = async (req, res) => {
   try {
      const id = req.params.id;
      const result = await AssignmentModel.findById(id);
      res.send(result);
   } catch {
      res.status(500).json({ message: "There was an server error" });
   }
};

module.exports = getSingleAssignment;
