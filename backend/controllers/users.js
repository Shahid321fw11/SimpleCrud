const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Get all users
// router.get('/', async (req, res) => {
//     try {
//         const users = await User.find({ isDeleted: false });
//         res.json(users);
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('Internal server error');
//     }
// });

router.get('/', (req, res) => {
    res.send("hello world");
})

// Get a user by ID
// router.get('/:id', async (req, res) => {
//     try {
//         const user = await User.findById(req.params.id);
//         if (!user) {
//             res.status(404).send('User not found');
//         } else {
//             res.json(user);
//         }
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('Internal server error');
//     }
// });

// Create a new user
router.post('/', async (req, res) => {
    try {
        const user = new User(req.body);
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal server error');
    }
});

// Update a user by ID
// router.patch('/:id', async (req, res) => {
//     try {
//         const updatedUser = await User.findByIdAndUpdate(
//             req.params.id,
//             { $set: { ...req.body, updatedAt: Date.now() } },
//             { new: true }
//         );
//         if (!updatedUser) {
//             res.status(404).send('User not found');
//         } else {
//             res.json(updatedUser);
//         }
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('Internal server error');
//     }
// });

// Delete a user by ID
// router.delete('/:id', async (req, res) => {
//     try {
//         const deletedUser = await User.findByIdAndUpdate(
//             req.params.id,
//             { $set: { isDeleted: true, updatedAt: Date.now() } },
//             { new: true }
//         );
//         if (!deletedUser) {
//             res.status(404).send('User not found');
//         } else {
//             res.json(deletedUser);
//         }
//     } catch (err) {
//         console.error(err);
//         res.status(500).send('Internal server error');
//     }
// });

module.exports = router;