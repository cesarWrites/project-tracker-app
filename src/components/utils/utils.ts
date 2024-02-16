// utils.ts
import faker from 'faker';

export const generateSampleData = (count: number) => {
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push({
      id: faker.datatype.uuid(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      phone: faker.phone.phoneNumber(),
      type: faker.random.word(),
      role: faker.random.word(),
      lastLogin: faker.date.past(),
    });
  }
  return data;
};
