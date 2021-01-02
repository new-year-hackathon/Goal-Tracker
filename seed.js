const { green, red } = require("chalk");
const { db } = require("./server/db");
const { User, Goal, Pet } = require('./server/db')

const seed = async () => {
    await db.sync({ force: true });

    const users = await Promise.all([
      User.create({
        firstName: "Bartlet",
        lastName: "Creeghan",
        email: "bcreeghan0@artisteer.com",
        password: "wExp5O"
      }),
      User.create({
        firstName: "Iolande",
        lastName: "Leishman",
        email: "ileishman1@slashdot.org",
        password: "XO9WVqQvl"
      }),
      User.create({
        firstName: "Kenna",
        lastName: "Greenstead",
        email: "kgreenstead2@disqus.com",
        password: "OvYvR5oq6zx"
      }),
      User.create({
        firstName: "Crista",
        lastName: "Daughtrey",
        email: "cdaughtrey3@constantcontact.com",
        password: "Q74BmrKGwha7"
      }),
      User.create({
        firstName: "Kariotta",
        lastName: "Kempton",
        email: "kkempton4@studiopress.com",
        password: "BMSVinagJHl"
      }),
    ]);

    const goals = await Promise.all([
        Goal.create({
            goal: "Finish coding my website",
            userId: 1
        }),
        Goal.create({
            goal: "Feed my imaginary goldfish",
            userId: 2
        }),
        Goal.create({
            goal: "Try not to cry and then cry a lot",
            userId: 3
        }),
        Goal.create({
            goal: "Go shopping for an outfit to wear to my living room",
            userId: 4
        }),
        Goal.create({
            goal: "Read a book about how to read",
            userId: 5
        }),
    ]);

    const pets = await Promise.all([
        Pet.create({
            name: "Baby Dragon",
            level: 3,
            imageUrl: "https://bit.ly/3hDbneT"
        }),
        Pet.create({
            name: "Crystal Dragon",
            level: 5,
            imageUrl: "https://bit.ly/2LcfW3E"
        }),
        Pet.create({
            name: "Sea Dragon",
            level: 10,
            imageUrl: "https://bit.ly/3o40Jjz"
        }),
        Pet.create({
            name: "Winged Dragon",
            level: 15,
            imageUrl: "https://bit.ly/3pCeFl8"
        }),
        Pet.create({
            name: "Snake Dragon",
            level: 30,
            imageUrl: "https://bit.ly/3b1Pg05"
        }),
        Pet.create({
            name: "Gold Dragon",
            level: 40,
            imageUrl: "https://bit.ly/3b8FAkN"
        }),
      ]);

  return [users, goals, pets];
};

module.exports = seed;
if (require.main === module) {
  seed()
    .then(() => {
      console.log(green("Seeding success!"));
      db.close();
    })
    .catch(err => {
      console.error(red("Oh noes! Something went wrong!"));
      console.error(err);
      db.close();
    });
}
