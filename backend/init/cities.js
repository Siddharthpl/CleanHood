const mongoose = require("mongoose");
const Cities = require("../models/cities");
require("dotenv").config(); // To load the MongoDB connection string from .env

// Async function to connect to MongoDB
async function main() {
  try {
    console.log("Mongo URI:", process.env.MONGO_KEY); 
    await mongoose.connect(process.env.MONGO_KEY, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection Successful with Database 📊!");

    // Define cities data to insert
    const citiesData = [
      new Cities({
        cityName: "Mumbai",
        supportEmail: "mcgmportal.mcgm@mcgm.gov.in",
      }),
      new Cities({
        cityName: "Delhi",
        supportEmail: "mayor@mcd.gov.in",
      }),
      new Cities({
        cityName: "Kolkata",
        supportEmail: "mmc@kmcgov.in",
      }),
      new Cities({
        cityName: "Bangalore",
        supportEmail: "comm@bbmp.gov.in",
      }),
      new Cities({
        cityName: "Chennai",
        supportEmail: "commissioner@chennaicorporation.gov.in",
      }),
      new Cities({
        cityName: "Hyderabad",
        supportEmail: "feedback@ghmc.gov.in",
      }),
      new Cities({
        cityName: "Ahmedabad",
        supportEmail: "info@ahmedabadcity.gov.in",
      }),
      new Cities({
        cityName: "Pune",
        supportEmail: "info@punecorporation.org",
      }),
      new Cities({
        cityName: "Surat",
        supportEmail: "info@suratmunicipal.org",
      }),
      new Cities({
        cityName: "Jaipur",
        supportEmail: "mayor@jaipurmc.org",
      }),
    ];

    // Insert cities data
    await Cities.insertMany(citiesData);
    console.log("Data Added");

  } catch (err) {
    console.error("Error:", err);
  } finally {
    mongoose.connection.close(); // Close the connection after the operation
  }
}

// Call the function to start the process
main();
