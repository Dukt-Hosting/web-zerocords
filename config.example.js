/** Database Info */
DATABASE_URL = process.env.DATABASE_URL || "" //DB string

DATABASE_HOST = process.env.DATABASE_HOST || "127.0.0.1"
DATABASE_PORT = process.env.DATABASE_PORT || 5432
DATABASE_USER = process.env.DATABASE_USER || "postgres"
DATABASE_PASS = process.env.DATABASE_PASS || ""
DATABASE_NAME = process.env.DATABASE_NAME || "zerocords"

/** Discord Info */
DISCORD_SECRET = process.env.DISCORD_SECRET || ""
DISCORD_CLIENT = process.env.DISCORD_CLIENT || ""

getDatabaseConfig = () => {
    if ( DATABASE_URL ) { return DATABASE_URL };

    return {
        user: DATABASE_USER,
        host: DATABASE_HOST,
        database: DATABASE_NAME,
        password: DATABASE_PASS,
        port: DATABASE_PORT
    }
}

export {
    DATABASE_URL,
    DATABASE_HOST,
    DATABASE_PORT,
    DATABASE_USER,
    DATABASE_PASS,
    DATABASE_NAME,
    getDatabaseConfig
}