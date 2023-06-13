const { faker } = require("@faker-js/faker");
const convertDate = (fakerDate) => {
  return fakerDate.toISOString().slice(0, 10);
};
const dateNow = new Date();
const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const email = faker.internet.email();
const createdAt = faker.date.past(); // 2022-12-20T16:45:59.757Z
const updatedAt = faker.date.between({ from: createdAt, to: dateNow });
const createdAtToDate = convertDate(createdAt); // YYYY-MM-DD
const updatedAtToDate = convertDate(updatedAt);
const isAdmin = faker.datatype.boolean({ probability: 0.2 });

console.log(
  firstName,
  lastName,
  email,
  createdAtToDate,
  updatedAtToDate,
  isAdmin
);
