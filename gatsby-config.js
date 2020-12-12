const metadata = require(`./content/metadata/metadata.json`)
module.exports = {
  plugins: [
    {
      resolve: `@marscollective/gatsby-theme-jdoe`,
      options: {
        metadata
      }
    }
  ]
}
