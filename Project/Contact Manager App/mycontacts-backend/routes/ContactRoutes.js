const express = require("express");
const router = express.Router();
const { getContacts, 
    createContact, 
    getContact, 
    updateContact, 
    deleteContact,
} = require("../controllers/contactController.js");
const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken);
router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;        //exports the router object so it can be used in other files