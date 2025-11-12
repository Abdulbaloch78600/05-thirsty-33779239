// Create a new router
const express = require("express");
const router = express.Router();

// Shared data for templates
var shopData = {
        shopName: "The Thirsty Student",
        productCategories: ["Beer", "Wine", "Soft Drinks", "Hot Drinks"],
        shops: [
          { location: "London", manager: "Alice Smith", address: "10 Oxford Street, London" },
          { location: "Manchester", manager: "Bob Johnson", address: "25 Deansgate, Manchester" },
          { location: "Birmingham", manager: "Carol White", address: "50 Bull Street, Birmingham" }
        ]
      };
      


// Handle the main route
router.get("/", (req, res) => {
    res.render("index", shopData);
});

// Handle about page
router.get("/about", (req, res) => {
    res.render("about", shopData); // pass shopData so shopName is defined
});

// Handle search page
router.get("/search", (req, res) => {
    res.render("search", shopData); // pass shopData so shopName is defined
});

// Handle search result page
router.get("/search_result", (req, res) => {
    // Pull out the fields separately
    const searchText = req.query.search_text;
    const category = req.query.category;

    // Display the user's search inputs
    res.send("You searched for " + searchText + " in " + category);
});

// Register page
router.get("/register", (req, res) => {
    res.render("register", shopData);
  });
  
// Handle registration submission (POST)
router.post("/registered", (req, res) => {
    // Extract form data from body
    const first = req.body.first;
    const last = req.body.last;
    const email = req.body.email;
  
    // Send a confirmation message
    res.send(
      "Hello " +
        first +
        " " +
        last +
        ", you are now registered! We will send an email to you at " +
        email
    );
  });

  // Survey page
router.get("/survey", (req, res) => {
    res.render("survey", shopData);
});

// Handle survey result
router.post("/survey_result", (req, res) => {
    // Pull values from form
    const first = req.body.first;
    const last = req.body.last;
    const email = req.body.email;
    const age = req.body.age;
    const category = req.body.category;
    const student = req.body.student ? "Yes" : "No";
    
    // Send a tidy response
    res.render("survey_result", {
        first,
        last,
        email,
        age,
        category,
        student
    });
});



// Export the router object so index.js can access it
module.exports = router;
