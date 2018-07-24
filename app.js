var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

var hostname = "127.0.0.1",
    port = 3000;

mongoose.connect("mongodb://localhost:27017/entertainment");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

var commentSchema = new mongoose.Schema({
    name: String,
    body: String,
    created: {type: Date, default: Date.now}
});
var entertainmentSchema = new mongoose.Schema({
    title: String,
    image: String,
    releaseDate: String,
    body: String,
    rating: { type: Number, default: 0, min: 0, max: 10 },
    comments: [commentSchema]
});
var Comment = mongoose.model("Comment", commentSchema);
var Entertainment = mongoose.model("Entertainment", entertainmentSchema);

// var Comment = new mongoose.model("Comment", commentSchema);

// Entertainment.remove({}, function(err) {
//     console.log('collection removed');
// });

// Entertainment.create(
//     {
//         title: "Daredevil",
//         image: "http://cdn.gospelherald.com/data/images/full/10570/daredevil-season-3.png",
//         releaseDate: "Apr 10, 2015",
//         body: "A blind lawyer fights crime by day in the courtroom and by night as a superhero with" +
//         " extraordinary senses in this adaptation of the Marvel Comics character Daredevil.",
//         rating: 8.8,
//         comments: {
//
//         }
//     }, function(err, entertainment) {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log("Newly created entertainment: " + entertainment);
//         }
//     }
// );
//
// Entertainment.create(
//     {
//         title: "Spider-Man",
//         image: "https://i.pinimg.com/originals/a5/f4/19/a5f419e1017863e965fd6e1b30c26dcf.jpg",
//         releaseDate: "May 3, 2002",
//         body: "Peter Parker (Maguire), after being bitten by a genetically altered spider, " +
//         "becomes Spider-Man, a hero of superhuman strength with the ability to cling to any " +
//         "surface. He dedicates himself to a life of fighting crime, while living a double life " +
//         "as a superhero and working student. (Sony))",
//         rating: 8.6
//     }, function(err, entertainment) {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log("Newly created entertainment: " + entertainment);
//         }
//     }
// );
//
// Entertainment.create(
//     {
//         title: "The Incredible Hulk",
//         image: "http://cdn.wegotthiscovered.com/wp-content/uploads/2017/12/mviyLSA.jpg",
//         releaseDate: "June 13, 2008",
//         body: "The Incredible Hulk kicks off an all-new, explosive and action-packed epic of " +
//         "one of the most popular Super Heroes of all time. In the film, scientist Bruce Banner " +
//         "desperately hunts for a cure to the gamma radiation that poisoned his cells and unleashes " +
//         "the unbridled force of rage within him: The Hulk. Living in the shadows—cut off form " +
//         "a life he knew and the woman he loves, Betty Ross—Banner struggles to avoid the " +
//         "obsessive pursuit of his nemesis, General Thunderbolt Ross and the military machinery " +
//         "that seeks to capture him and brutally exploit his power. As all three grapple with the " +
//         "secrets that led to The Hulk’s creation, they are confronted with a monstrous new adversary " +
//         "known as the Abomination, whose destructive strength exceeds even The Hulk’s own. (Universal " +
//         "Studios)",
//         rating: 7.3
//     }, function(err, entertainment) {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log("Newly created entertainment: " + entertainment);
//         }
//     }
// );
//
// Entertainment.create(
//     {
//         title: "Batman Begins",
//         image: "https://images-na.ssl-images-amazon.com/images/I/41W4a4oxfDL.jpg",
//         releaseDate: "June 15, 2005",
//         body: "Christopher Nolan's Batman Begins explores the origins of the Batman legend and the " +
//         "Dark Knight's emergence as a force for good in Gotham. [Warner Bros.]",
//         rating: 8.6
//     }, function(err, entertainment) {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log("Newly created entertainment: " + entertainment);
//         }
//     }
// );
//
// Entertainment.create(
//     {
//         title: "Deadpool",
//         image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/04eafb25626631.5634844b7293f.jpg",
//         releaseDate: "February 12, 2016",
//         body: "Based upon the Marvel Comics anti-hero, Deadpool is the origin story of former Special Forces " +
//         "operative turned mercenary Wade Wilson, who after being subjected to a rogue experiment that leaves " +
//         "him with accelerated healing powers, adopts the alter ego Deadpool. Armed with new abilities and a dark " +
//         "and twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life. [20th Century Fox]",
//         rating: 8.1
//     }, function(err, entertainment) {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log("Newly created entertainment: " + entertainment);
//         }
//     }
// );
//
// Entertainment.create(
//     {
//         title: "Iron Man",
//         image: "https://images-na.ssl-images-amazon.com/images/I/31UiPirP4GL.jpg",
//         releaseDate: "May 2, 2008",
//         body: "Tony Stark is a billionaire industrialist and genius inventor who is kidnapped and forced to build " +
//         "a devastating weapon. Instead, using his intelligence and ingenuity, Tony builds a high-tech suit of armor " +
//         "and escapes captivity. When he uncovers a nefarious plot with global implications, he dons his powerful armor " +
//         "and vows to protect the world as Iron Man. [Paramount Pictures, Marvel Studios]",
//         rating: 8.5
//     }, function(err, entertainment) {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log("Newly created entertainment: " + entertainment);
//         }
//     }
// );
//
// Entertainment.create(
//     {
//         title: "Doctor Strange",
//         image: "https://images-na.ssl-images-amazon.com/images/I/71gyLVWIfIL._SY606_.jpg",
//         releaseDate: "November 4, 2016",
//         body: "After a tragic car accident, talented neurosurgeon Doctor Stephen Strange (Benedict Cumberbatch) must " +
//         "put ego aside and learn the secrets of a hidden world of mysticism and alternate dimensions. Based in New " +
//         "York City's Greenwich Village, Doctor Strange must act as an intermediary between the real world and what lies " +
//         "beyond, utilizing a vast array of metaphysical abilities and artifacts to protect the Marvel Cinematic Universe.",
//         rating: 8.2
//     }, function(err, entertainment) {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log("Newly created entertainment: " + entertainment);
//         }
//     }
// );

app.get("/", function(req, res) {
    Entertainment.find({}, function(err, entertainments) {
        if(err) {
            console.log(err);
        } else {
            res.render("index", {entertainments: entertainments});
        }
    });
});

// index route
app.get("/:entertainmentid/comments", function(req, res) {
    Entertainment.findById(req.params.entertainmentid, function(err, foundEntertainment) {
        if(err) {
            console.log(err);
        } else {
            res.render("comments", {entertainment: foundEntertainment});
        }
    });
});

// new route
app.get("/:entertainmentid/comments/new", function(req, res) {
    Entertainment.findById(req.params.entertainmentid, function(err, foundEntertainment) {
        if(err) {
            console.log(err);
        } else {
            res.render("new", {entertainment: foundEntertainment});
        }
    });
});

// create route
app.post("/:entertainmentid/comments", function(req, res) {
   Comment.create(req.body.comment, function(err, newComment) {
      if(err) {
          res.render("new");
      } else {
          Entertainment.findById(req.params.entertainmentid, function(err, foundEntertainment) {
             if(err) {
                 res.redirect("/");
             } else {
                foundEntertainment.comments.push(newComment);
                console.log(foundEntertainment.comments);
                res.redirect("/" + req.params.entertainmentid + "/comments")
             }
          });
      }
   });
});

app.listen(port, hostname, function() {
    console.log("Server starting...");
});