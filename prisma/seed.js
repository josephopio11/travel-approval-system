const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const departments = [
  { id: 1, name: "HR" },
  { id: 2, name: "IT" },
  { id: 3, name: "Sales" },
  { id: 4, name: "Marketing" },
  { id: 5, name: "Admin" },
];

const employees = [
  {
    id: 1,
    firstName: "Mike",
    lastName: "Smith",
    email: "mike@me.com",
    designation: "Teacher",
    phone: "123-456-7890",
    lpo_reference: "ABC123",
  },
  {
    id: 2,
    firstName: "John",
    lastName: "Doe",
    email: "john@me.com",
    designation: "Manager",
    phone: "123-456-7890",
    lpo_reference: "ABC123",
  },
  {
    id: 3,
    firstName: "Jane",
    lastName: "Doe",
    email: "jane@me.com",
    designation: "Manager",
    phone: "123-456-7890",
    lpo_reference: "ABC123",
  },
  {
    id: 4,
    firstName: "Peter",
    lastName: "Doe",
    email: "jane@me.com",
    designation: "Manager",
    phone: "123-456-7890",
    lpo_reference: "ABC123",
  },
  {
    id: 5,
    firstName: "Luke",
    lastName: "Doe",
    email: "jane@me.com",
    designation: "Manager",
    phone: "123-456-7890",
    lpo_reference: "ABC123",
  },
];

async function main() {
  const person = await prisma.user.upsert({
    where: { email: "hi@example.com" },
    update: {},
    create: {
      name: "John Doe",
      email: "hi@example.com",
      pass: "password",
    },
  });

  await Promise.all(
    departments.map(async (department) => {
      await prisma.department.create({
        // where: {
        //   name: department.name,
        // },
        // update: {},
        create: {
          id: department.id,
          name: department.name,
        },
      });

      console.log(department);
    }),

    employees.map(async (employee) => {
      // await prisma.employee.upsert({
      //   where: {
      //     email: employee.email,
      //   },
      //   update: {},
      //   create: {
      //     firstName: employee.firstName,
      //     lastName: employee.lastName,
      //     email: employee.email,
      //     designation: employee.designation,
      //     phone: employee.phone,
      //     lpo_reference: employee.lpo_reference,
      //   },
      // });
      console.log(null);
    })
  );
  return person;
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
