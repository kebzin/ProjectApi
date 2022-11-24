const Properties = require('../models/properties');
const User = require('../models/user');
const createProperty = async (req, res) => {
  const content = req.body;
  const user = await User.findById(content.userId);
  
  try {
    const Property = await Properties.create({ user: content.userId,  ...content 
})
    
    user.properties = user.properties.concat(Property._id)
    await user.save();
    return res.status(201).json({ data: Property });
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
};

const getAllProperty = async (req, res) => {
    const userId = req.body.userId;
    try {
      const Property = await Properties.find({ user: userId });
      return res.status(201).json({ data: Property });
    } catch (error) {
      console.log(error);
      return res.status(500).end();
    }
  };

  const getOneProperty = async (req, res) => {
    const id = req.params.id
    const userId = req.body.userId;
    try {
      const Property = await Properties.findOne({ _id: id, user: userId });
      if (!Property) {
        return res.status(400).json({ message: 'Property not found' });
      }
      return res.status(201).json({ data: Property });
    } catch (error) {
      console.log(error);
      return res.status(500).end();
    }
  };

  const updateOneProperty = async (req, res) => {
    const id = req.params.id
    const userId = req.body.userId;
    const content = req.body
    try {
      const Property = await Properties.findOneAndUpdate(
        { _id: id, user: userId },
        content,
        { new: true }
      );
      if (!Property) {
        return res.status(400).json({ message: 'Property not found' });
      }
      return res.status(201).json({ data: Property });
    } catch (error) {
      console.log(error);
      return res.status(500).end();
    }
  };


  const deleteOneProperty = async (req, res) => {
    const id = req.params.id
    const userId = req.body.userId;
    try {
      const Property = await Properties.findOneAndRemove({ _id: id, user: userId 
  });
  if (!Property) {
    return res.status(400).json({ message: 'Property not found' });
  }
  return res.status(201).json({ message: 'deleted successfully', 
data: Property });
} catch (error) {
  console.log(error);
  return res.status(500).end();
}
};

module.exports = {
  createProperty,
  getAllProperty,
  getOneProperty,
  deleteOneProperty,
  updateOneProperty,
};