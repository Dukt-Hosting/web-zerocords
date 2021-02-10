import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import config from '../../../config'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Discord({
      clientId: config.discordID,
      clientSecret: config.discordSecret,
    }),
    // ...add more providers here
  ],

  // A database is optional, but required to persist accounts in a database
  database: config.database,
})