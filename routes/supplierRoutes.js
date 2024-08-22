const express = require('express');
const router = express.Router();
const Supplier = require('../models/supplierModel');

// POST /api/supplier/query
router.post('/query', async (req, res) => {
  try {
    const { location, nature_of_business, manufacturing_process, limit = 10, page = 1 } = req.body;

    // Input validation
    if (!location || !nature_of_business || !manufacturing_process) {
      return res.status(400).json({ msg: 'Please provide all required fields' });
    }

    // Querying the database
    const suppliers = await Supplier.find({
      location,
      nature_of_business,
      manufacturing_processes: manufacturing_process
    })
    .limit(limit)
    .skip((page - 1) * limit);

    // Returning the response
    res.json(suppliers);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
