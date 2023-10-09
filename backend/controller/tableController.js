const tableModel = require('../model/tableModel');
const nodemailer = require('nodemailer')

const transporter=nodemailer.createTransport({
    host: "smtp.gmail.com",
    port:587,
    secure:false,
    auth:{
        user:"arbaazkhanark23@gmail.com",
        pass:"ymxnalsxpmcqzhlb"
    }
});

const bookTable = async (req, res) => {
    const { table, timing, email } = req.body;
    console.log("body: :",req.body);

    try {
        const isTable = await tableModel.findOne({ name: table });
        console.log("Found Table:", isTable);

        if (isTable) {
            const slot = isTable.slots.find(slot => slot.Hours == timing);
            console.log("Selected Slot:", slot);

            if (slot && slot.isAvailable === "true") {
                const updatedSlots = isTable.slots.map(slot => {
                    if (slot.Hours === timing) {
                        slot.isAvailable = "false";
                    }
                    return slot;
                });
                const mailOptions = {
                    from: "arbaazkhanark23@gmail.com",
                    to: email,
                    subject: "Table Booking Confirmation - Coffee Day",
                    text: `Hello ${req.body.name},\n\nThank you for booking a table at Coffee Day.\n\nYour Table No. ${isTable.name} has been booked for ${slot.Hours}.\n\nWe look forward to serving you!\n\nBest regards,\nThe Coffee Day Team`,
                    html: `<h2 style='color: #6F4E37;'>Hello ${req.body.name} ji 🍵</h2><p>Thank you for booking a table at Coffee Day.</p><p>Your Table No. ${isTable.name} has been booked for ${slot.Hours}.</p><p>We look forward to serving you!</p><p>Best regards,<br>The Coffee Day Team</p>`
                };
            await transporter.sendMail(mailOptions)

                isTable.slots = updatedSlots;
                await isTable.updateOne({$set:{slots:updatedSlots}})
                console.log("Updated Table:", isTable);
                res.json({success:true, message:`Your Table No. ${isTable.name} is Booked for ${slot.Hours}`});
            } else {
                res.send(`Sorry, ${isTable.name} Table is Already Booked or Slot is Invalid.`);
            }
        } else {
            res.send(`Table not found.`);
        }
    } catch (error) {
        console.log(error);
        res.send({ msg: error.message });
    }
}


module.exports={bookTable};