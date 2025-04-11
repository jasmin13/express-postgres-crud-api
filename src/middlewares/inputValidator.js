import Joi from "joi";

// Define validation schema for user data
// - name: string, minimum 3 characters, required
// - email: valid email format, required
const userSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
});

// Middleware to validate user input before processing the request
// Returns 400 Bad Request if validation fails
const validateUser = (req, res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ 
        status: 400,
        message: error.details[0].message 
    });
  }
  next();
}

export default validateUser;