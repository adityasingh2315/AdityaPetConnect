const AdoptFormModel = require('../Model/adoptFormModel');
const nodemailer = require('nodemailer');

const saveForm = async (req, res) => {
  try {
    const formData = new AdoptFormModel(req.body);
    await formData.save();

    // Send Email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"AdityaPetConnect" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `🐾 New Adoption Request for Pet ID: ${req.body.petId}`,
      text: `
        A new adoption request has been submitted!

        📧 Email: ${req.body.email}
        📞 Phone: ${req.body.phoneNo}
        🏠 Living Situation: ${req.body.livingSituation}
        🐕 Experience: ${req.body.previousExperience}
        👨‍👩‍👧‍👦 Other Pets/Family: ${req.body.familyComposition}
        🆔 Pet ID: ${req.body.petId}
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(201).json({ message: 'Form saved and email sent!' });

  } catch (error) {
    console.error("❌ Error in saveForm:", error);
    res.status(500).json({ error: 'Form save or email failed' });
  }
};

const getAdoptForms = async (req, res) => {
  try {
    const forms = await AdoptFormModel.find();
    res.status(200).json(forms);
  } catch (error) {
    console.error("❌ Error in getAdoptForms:", error);
    res.status(500).json({ error: 'Failed to fetch forms' });
  }
};

module.exports = {
  saveForm,
  getAdoptForms,
};
