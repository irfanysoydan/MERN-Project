import mongoose from "mongoose";
import validator from "validator";

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        minlegth:[3, "Ad en az 3 karakterden oluşmalı"]
    },
    email: {
        type: String,
        required: true,
        minlegth:[5, "Email en az 5 karakterden oluşmalı"],
        validate: [validator.isEmail, "Email doğru değil"]
    },
    password: {
        type: String,
        required: true,
        minlegth:[8, "Şifre en az 8 karakterden oluşmalı"]
    },
    userType: {
        type: String,
        enum: ["USER", "ADMIN"],
        default: "USER"
    },
    phoneNumber: {
        type: String,
        required: true
    },
})

export default mongoose.model("User", userSchema) //Burada mongoose.model kullanarak database'de User adında bir model oluşturuyoruz ve bu modele userSchema şemasını atıyoruz.
                                                  // Yani yukarıda oluşturduğumuz user classını User adıyla veritabanımızda tutuyoruz.