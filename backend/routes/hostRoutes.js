const express = require('express');
const router = express.Router();

const {
 createHost } = require("../controllers/hostController");

// Create a new host
router.post('/hosts', createHost);

// // Get a host by ID
// router.get('/hosts/:id', getHostById);

// // Get all hosts
// router.get('/hosts', getHosts);

// // Update a host by ID
// router.put('/hosts/:id', updateHost);

// // Delete a host by ID
// router.delete('/hosts/:id', deleteHost);

module.exports = router;
