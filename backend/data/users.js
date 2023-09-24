import bcrypt from "bcryptjs";

const users = [
    {
        name: "Admin User",
        email: "admin@email.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true,
    },
    {
        name: "Dhoni",
        email: "dhoni7@email.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: false,
    },
    {
        name: "Virat",
        email: "virat18@email.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: false,
    },
];

export default users;