module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  // url: env('WEBSITE', 'http://localhost'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '95393648e80d5b4c33feba22129a5e63'),
    },
  },
});
