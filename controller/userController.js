const Contact = require("../Models/Contact");

// Save contact form data
const UserData = async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;

    // Validate required fields
    if (!name || !phone || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Save to database
    const newContact = new Contact({
      name,
      phone,
      email,
      message,
    });

    await newContact.save();

    return res.status(201).json({
      success: true,
      message: "Contact details saved successfully",
      data: newContact,
    });

  } catch (error) {
    console.error("Error saving contact:", error);

    return res.status(500).json({
      success: false,
      message: "Server error while saving contact details",
      error: error.message,
    });
  }
};

module.exports = {
  UserData,
};
