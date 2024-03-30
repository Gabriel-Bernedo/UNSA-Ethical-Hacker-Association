const z = require('zod');

const registerSchema = z.object({
    email: z.string({
        required_error: "Email is required!"
    }).email(),
    name: z.string({
        required_error: "Name is required!"
    }).min(3).max(60),
    password: z.string({
        required_error: "Password is required!"
    }).min(8).max(15),
    confirmPassword: z.string({
        required_error: "Confirm password is required!"
    }).min(8).max(15)
})
.refine((data) => data.password == data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
});

module.exports = {
    registerSchema
}