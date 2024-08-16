const { body, validationResult } = require('express-validator');

const validateTask = [
  body('title').notEmpty().withMessage('Title is required'),
  body('description').notEmpty().withMessage('Description is required'),
  body('completed').custom(value=>{
    if (typeof value === 'boolean') {
        return true;
    }
    if (typeof value === 'string') {
        throw new Error('Completed must be a boolean value');
    }
    return false;
  }).withMessage('Completed must be a boolean value'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = validateTask;
