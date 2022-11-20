import { registerAs } from "@nestjs/config";

export default registerAs('mailerConfig', () => {
    return {
        transport: {
            host: process.env.MAIL_HOST,
            secure: false,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASSWORD,
            },
        }
    }
});