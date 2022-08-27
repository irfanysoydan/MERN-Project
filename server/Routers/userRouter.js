import express from "express"
import mongoose from "mongoose"
import bcrypt from "bcryptjs"
import User from "../models/userModel.js"

const router = express.Router()

//localhost:5000/users ' a yapılan post isteğinin karşılığı "kullanıcı oluşturma işlemi"
router.post("/signup", async (req, res) => {
    try {
        console.log(req.body)
        const { fullName, password, phoneNumber, email } = req.body;

        const userExists = await User.findOne({ email })
        if (userExists)
            return res.status(400).json({ message: "User already exists." })

        const hashedPassword = await bcrypt.hash(password, 7)

        const createdUser = await User.create({
            fullName,
            email,
            password: hashedPassword,
            phoneNumber
        })


        return res.status(201).json(createdUser);

    } catch (error) {
        console.log(error)
        return res.json({ message: "Create user failed" })

    }
})

//localhost:5000/users ' a yapılan post isteğinin karşılığı "kullanıcı giriş işlemi"
router.post("/signin", async (req, res) => {

    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        if (!user)
            return res.status(400).json({ message: "Email doesnt exist" })

        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if (!isPasswordCorrect)
            return res.status(400).json({ message: "Password is uncorrect" })

        return res.status(200).json({ user, message: "Login is succesfully" })
    } catch (error) {
        return res.json({ message: "Login failed" })
    }
})

export default router;