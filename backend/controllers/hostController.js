const Host = require("../models/hostModel");

exports.createHost = async (req, res) => {
  try {
    const { name, ContactNo } = req.body;

    // Check if the host already exists in the database
    const existingHost = await Host.findOne({ ContactNo });
    if (existingHost) {
      return res.status(400).json({
        success: false,
        message: "A host with that phone number already exists.",
      });
    }

    // Create a new host instance using the request body
    const newHost = new Host({
      name,
      ContactNo,
    });

    // Save the new host to the database
    await newHost.save();

    // Return a success response
    res.status(201).json({
      success: true,
      message: "Host created successfully",
      host: newHost,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to create host",
      error: error.message,
    });
  }
};
