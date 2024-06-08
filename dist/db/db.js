"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const promise_1 = require("mysql2/promise");
async function connect() {
    const connection = await (0, promise_1.createPool)({
        host: 'localhost',
        user: 'database-user',
        password: 'your-password',
        database: 'blog',
        connectionLimit: 10
    });
    return connection;
}
exports.connect = connect;
