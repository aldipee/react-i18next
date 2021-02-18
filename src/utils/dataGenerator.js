import faker from 'faker';

export function generateData() {
  const data = Array.from({ length: 40 }).map((n, i) => {
    return {
      key: i,
      name: faker.name.findName(),
      email: faker.internet.email(),
      chinese: faker.random.number(),
      math: faker.random.number(),
      english: faker.random.number(),
    };
  });
  console.log(JSON.stringify(data));
  return data;
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
export function generateDataUsers() {
  const data = Array.from({ length: 40 }).map((n, i) => {
    return {
      key: i,
      name: faker.name.findName(),
      age: randomIntFromInterval(18, 70),
      jobTitle: faker.name.jobTitle(),
      phoneNumber: faker.phone.phoneNumberFormat(),
      avatar: faker.internet.avatar(),
      address: 'Sidney No. 1 Lake Park',
    };
  });
  console.log(data);
  return data;
}
