import connectDb from "./connectDb.js";

export const newStore = async (req, res) => {
  // check if request is valid
  if (!req.body || !req.body.name || !req.body.address) {
    res.status(401).send("Invalid request");
    return;
  }
  // connect to Firestore
  const db = connectDb();
  // prepare the data
  const newStore = {
    name: req.body.name,
    address: req.body.address,
    description: req.body.description,
    foodDetails: req.body.foodDetails,
    schedule: req.body.schedule,
  };
  // add data to the restaurants collection
  try {
    const doc = await db.collection("stores").add(newStore);
    // respond with success
    res.status(201).send("Store created " + doc.id);
  } catch (err) {
    // respond with error
    res.status(500).send(err);
  }
  // db.collection('restaurants').add(newRestaurant)
  //   .then(doc => res.status(201).send('Restaurant created ' + doc.id))
  //   .catch(err => res.status(500).send(err));
};
