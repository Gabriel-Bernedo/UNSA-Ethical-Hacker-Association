const z = require('zod');

const adminSchema = z.object({
    email: z.string({
        required_error: "Email is required"
    }).email(),
    roleId: z.number().max(3).min(0)
})

module.exports = {
    adminSchema
}