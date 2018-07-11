var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Clouds", 
        image: "https://images.unsplash.com/photo-1513382848136-770cf055a751?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6c59435c826b33e4074ab3cc921d9bc5&auto=format&fit=crop&w=800&q=60",
        description: "Bacon ipsum dolor amet tri-tip drumstick pork meatball kielbasa. Andouille landjaeger jowl boudin, turkey leberkas shoulder. Tri-tip spare ribs swine jerky hamburger. Pig bresaola porchetta tenderloin swine prosciutto turducken pork chop jowl pork belly. Rump beef ribs pork loin, venison burgdoggen buffalo salami alcatra."
    },
    {
        name: "Boom!", 
        image: "https://images.unsplash.com/photo-1524272332618-3a94122bb0c1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dc77b626bf5cd59a31f9cef342d4a6bb&auto=format&fit=crop&w=800&q=60",
        description: "Bacon ipsum dolor amet tri-tip drumstick pork meatball kielbasa. Andouille landjaeger jowl boudin, turkey leberkas shoulder. Tri-tip spare ribs swine jerky hamburger. Pig bresaola porchetta tenderloin swine prosciutto turducken pork chop jowl pork belly. Rump beef ribs pork loin, venison burgdoggen buffalo salami alcatra."
    },
    {
        name: "Desert!", 
        image: "https://images.unsplash.com/photo-1503900311769-9f25e9f06068?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=06a1037d8bae296720cc24369d7090d6&auto=format&fit=crop&w=800&q=60",
        description: "Bacon ipsum dolor amet tri-tip drumstick pork meatball kielbasa. Andouille landjaeger jowl boudin, turkey leberkas shoulder. Tri-tip spare ribs swine jerky hamburger. Pig bresaola porchetta tenderloin swine prosciutto turducken pork chop jowl pork belly. Rump beef ribs pork loin, venison burgdoggen buffalo salami alcatra."
    }
]

function seedDB(){
    // Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            console.log("Campgrounds removed!");
            // Add a few campgrounds
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err);
                    } else {
                        console.log("Added a campground!")
                        // Create a comment
                        Comment.create(
                            {
                                text: "This place is amazing",
                                author: "Homer"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else {
                                    campground.comments.push(comment);
                                    campground.save(); 
                                    console.log("Created a new comment!");
                                }
                            });
                    }
                });
            });
        }
    });
}

module.exports = seedDB;    