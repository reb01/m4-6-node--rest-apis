"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { clients } = require("./data/clients");
const { words } = require("./data/words");
const { v4: uuidv4 } = require("uuid");
const app = express();
app
    .use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header(
            "Access-Control-Allow-Headers",
            "Origin, X-Requested-With, Content-Type, Accept"
        );
        next();
    })
    .use(morgan("tiny"))
    .use(express.static("public"))
    .use(bodyParser.json())
    .use(express.urlencoded({ extended: false }));

// endpoints
app.get("/clients", (req, res) => {
    res.status(200).json({
        status: 200,
        data: clients,
    });
});
app.get("/client/:id", (req, res) => {
    res.status(200).json({
        status: 200,
        data: clients.find((client) => {
            console.log(client.id, req.params.id);
            return client.id === req.params.id;
        }),
    });
});
const newId = uuidv4();

app.put("/client/new", (req, res) => {
    const emailAdd = String(req.body.email);
    if (!emailAdd.includes("@")) {
        res.status(400).json({
            status: "error",
            error: "missing-data",
        });
        return;
    }
    const clientsVar = {
        id: newId,
        isActive: true,
        age: req.body.age,
        name: req.body.age,
        gender: req.body.gender,
        company: req.body.company,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
    };
    clients.push(clientsVar);
    res.send(clientsVar);
});

app.delete("/client/delete/:id", (req, res) => {
    const findClient = clients.find((client) => {
        console.log(client.id, req.params.id);
        return client.id === req.params.id;
    });

    const index = clients.indexOf(findClient);
    clients.splice(index, 1);

    res.status(200).json({
        status: 200,
        data: findClient,
    });
});

// Hangman

app.get("/hangman/word/:id", (req, res) => {
    res.status(200).json({
        status: 200,
        data: words.find((word) => {
            return word.id === req.params.id;
        }),
    });
});

const handleWord = (req, res) => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    let newRandomWordObj = randomWord;
    delete newRandomWordObj.word;
    res.status(200).json({ data: newRandomWordObj });
};
// Here the frontend recieves a random word.
app.get("/hangman/word", handleWord);

// From the front end when a word is chosen (from the backend from handleWord),
// word gives an id which is in the url (req.params.id to get this id). When a letter is chosen this also goes in the url. So in the get request,
// req.params.letter are recieved from the frontend with the id. So we have an id and a letter.
// (from id find word).(from the letter - see if the letter is in the word)
// (if it is return an array with the position(s) of the letter (true and false))

const handleGuess = (req, res) => {
    const idOfWord = req.params.id;
    const letterChosen = req.params.letter;
    const findWordObjFromId = words.find((word) => {
        return word.id === idOfWord;
    });
    const word = findWordObjFromId.word;
    let puzzleWord = word
        .split("")
        .map((letter) => (letter === letterChosen ? "true" : "false"));

    res.status(200).json({ data: puzzleWord });
};

app.get("/hangman/guess/:id/:letter", handleGuess);

app.listen(8000, () => console.log(`Listening on port 8000`));