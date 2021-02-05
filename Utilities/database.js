const mongoURI =
  'mongodb+srv://kavya_user01:root@cluster0.u84oj.mongodb.net/cluster0?authSource=admin&replicaSet=atlas-5256ad-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true';

const insertFlightDetails = (flightDetails) => {
  const mongoose = require('mongoose');
  mongoose
    .connect(mongoURI, { useNewUrlParser: true })
    .then(() => {
      console.log('Connected');
    })
    .catch((error) => handleError(error));

  const Schema = mongoose.Schema;
  const JourneySchema = new Schema({
    From: String,
    To: String,
    date: {
      type: Date,
      default: Date.now,
    },
  });
  const journey = mongoose.model('SomeModel', JourneySchema);
  const journeyDetails = new journey(flightDetails);
  try {
    journey
      .insertMany([journeyDetails])
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
  mongoose.disconnect();
};

module.exports = {
  insertFlightDetails,
};

// insertFlightDetails({
//   From: 'Bangalore',
//   To: 'Dehli',
// });
