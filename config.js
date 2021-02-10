export default {
    database: {
        type: "postgres",
        host: process.env.DATABASE_HOST || "127.0.0.1",
        port: process.env.DATABASE_PORT || 5432,
        username: process.env.DATABASE_USER || "postgres",
        password: process.env.DATABASE_PASS || "sudo",
        database: process.env.DATABASE_NAME || "botpog"
    },
    discordSecret: process.env.DISCORD_SECRET || "",
    discordID: process.env.DISCORD_CLIENT || "752346510523629669"
} 