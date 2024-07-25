

const express = require('express');
const router = express.Router();

const userschema = require("../model/usermodel")

const bcrypt = require('bcrypt');

// register
router.post("/api/register", async (req, res) => {

    try {
        const { name, email, password } = req.body
        const newuser = new userschema({ name, email, password })
        await newuser.save()
        // console.log(newuser);
        // res.json(newuser)
        res.status(200).json({ msg: "register is succesfully" })
    }
    catch (error) {
        console.log("error for registering ", error);
        res.status(500).json({ msg: "error in register" })
    }
})

// login
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const oldUser = await userschema.findOne({ email });

        if (!oldUser) {
            return res.status(400).json({ msg: "Invalid email" });
        }

        const isPasswordMatch = await bcrypt.compare(password, oldUser.password);
        if (!isPasswordMatch) {
            return res.status(400).json({ msg: "Invalid email or password" });
        }

        res.status(200).json({ msg: "Login successfully" });
    } catch (error) {
        console.log(error, "Error in login");
        res.status(500).json({ msg: "Error in login" });
    }
});


module.exports = router;