const { AssignmentModel } = require("../../models/models");

const paginate = async (req, res) => {
   const pageNumber = parseFloat(req.query.pageNumber);
   const pageSize = parseFloat(req.query.pageSize);
   const dataCount = await AssignmentModel.find({}).estimatedDocumentCount();
   const result = await AssignmentModel.find({})
      .skip((pageNumber - 1) * pageSize)
      .limit(pageSize);
   res.status(200).json({ result, dataCount });
};
module.exports = paginate;
