const Properties = require('../models/properties');
const User = require('../models/user');



const createProperty = async (req, res, next) => {
  const content = req.body; // here we are requesting the data from the body passed by the user
  const user = await User.findById(content.userId); // here we take the userid withen the body and find that userId withen the user table in database
  console.log(content.userId);

  try {
    const Property = await Properties.create({ user: content.userId,  ...content // here we are creating a property , add the userid we find from the user table to it and  spread the rest of the content of the body 
})  
    user.properties = user.properties.concat(Property._id)// then withen the user table we add the propertyid to the property array 
    await user.save(); /// save the properties in the database 
    return res.status(201).json({ data: Property }); // return the property object to the user who add the property
  } 
  catch (error) { // catch the error if something happen 
    console.log(error); // then print out the error message
    return res.status(500).end(); // return the error to the user  to see the error message
  }
};

const getAllProperty = async (req, res) => { // get all properties
    const userId = req.body.userId;// here we are getting the userID withen the body, since the user id will be withe the body 
    try {
      const Property = await Properties.find({}); // finding all the property withen the database  //user: userId 
      return res.status(201).json({ data: Property }); // returnning the property if we fin any to the person who request it
    } catch (error) { // catch the error if something happen 
      console.log(error);// then print out the error message
      return res.status(500).end();  // return the error to the user for to see the error message
    }
  };

  const getOneProperty = async (req, res) => {//getting an single property
    const id = req.params.id // we are requesting the id of the property passed withen the paramater 
    const userId = req.body.userId; // we are requesting the userID from body :: this i dont know why for now...
    try {
      const Property = await Properties.findOne({ _id: id, user: userId }); // we are then find on property base on the id passed withen the params
      if (!Property) { // if we don't have that id which is passed withen the paramater 
        return res.status(400).json({ message: 'Property not found' }); // then notefied the user that the property he/she is looking for is not found
      }
      return res.status(201).json({ data: Property }); //else if we have that id which is passed withen the paramater then we return the property 
    } catch (error) { // catch the error if something happen 
      console.log(error); // then print out the error message
      return res.status(500).end();  // return the error to the user for to see the error message
    }
  };

  const updateOneProperty = async (req, res) => { // updating a property
    const id = req.params.id // we are requesting the id of the property passed withen the paramater 
    const userId = req.body.userId; // we are requesting the userId passed in the boy: because a property is only updated by the person who created it
    const content = req.body // requesting the content of the of the body
    try {
      const Property = await Properties.findOneAndUpdate( // finding one and update
        { _id: id, user: userId }, // here its finding the id passed withen the params and also finding the usedID
        content, // take the content and update
        { new: true } // mean that the update will affect all the content either chang or not
      );
      if (!Property) {
        return res.status(400).json({ message: 'Property not found' }); // if we were not able to find the property the we let the user know that the property he.she is trying to update does not exist
      }
      return res.status(201).json({ data: Property }); // else when we fin the property we will update the property and return the result to the user
    } catch (error) { // catch the error if something happen 
      console.log(error); // then print out the error message
      return res.status(500).end(); // return the error to the user for to see the error message
    }
  };


  const deleteOneProperty = async (req, res) => {
    const id = req.params.id // we are requesting the id of the property passed withen the paramater
    const userId = req.body.userId; // we are requesting the usedID because a property can oly be delete by te user who post it.
    try {
      const Property = await Properties.findOneAndRemove({ _id: id, user: userId  // finding the property id and the user id 
  });
  if (!Property) { // if we don't have a property with match PropertyID 
    return res.status(400).json({ message: 'Property not found' }); // we tell the user that the property is not found
  }
  return res.status(201).json({ message: 'deleted successfully', // else after finding the property we tell the user the delet is succesfull and display that property
data: Property });
} catch (error) { // catch the error if something happen 
  console.log(error); // then print out the error message
  return res.status(500).end(); // return the error to the user for to see the error message
}
};

module.exports = {
  createProperty,
  getAllProperty,
  getOneProperty,
  deleteOneProperty,
  updateOneProperty,
};
