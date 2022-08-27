import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
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