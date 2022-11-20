import { registerAs } from '@nestjs/config';

export default registerAs('endPointConfig', () => {
  return {
    auth: {
      jwt_secret: process.env.JWT_SECRET,
    }
  };
});
