import connectDb from "./connectDb.js";

export const getShelters = async (req, res) => {
  const db = connectDb();
  const shelters = await db.collection("homeless shelters").get();
  const sheltersArray = shelters.docs.map((doc) => doc.data());
  res.status(200).send(sheltersArray);
};
