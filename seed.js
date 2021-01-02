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

      }),
    ]);

    const pets = await Promise.all([
        Pet.create({

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
