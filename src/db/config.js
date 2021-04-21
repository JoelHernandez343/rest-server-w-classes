const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log('Database connected');
  } catch (err) {
    console.log(err);

    throw new Error('Error initializing db connection');
  }
};

module.exports = {
  dbConnection,
};
