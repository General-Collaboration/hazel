const hazel = require('./index')

const {
  INTERVAL: interval,
  ACCOUNT: account,
  REPOSITORY: repository,
  PRE: pre,
  TOKEN: token,
  URL: PRIVATE_BASE_URL,
  VERCEL_URL,
  VERCEL_PROJECT_PRODUCTION_URL
} = process.env

const url = PRIVATE_BASE_URL || VERCEL_PROJECT_PRODUCTION_URL || VERCEL_URL

module.exports = hazel({
  interval,
  account,
  repository,
  pre,
  token,
  url
})
