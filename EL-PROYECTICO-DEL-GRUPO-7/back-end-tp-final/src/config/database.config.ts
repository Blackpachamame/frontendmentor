import { registerAs } from '@nestjs/config';

export default registerAs('databaseConfig', () => {
  return {
    connect: {
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      database: process.env.DATABASE_NAME,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      logging: process.env.DATABASE_LOGGING,
    },
  };
});
