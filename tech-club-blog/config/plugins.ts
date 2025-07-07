export default ({ env }: { env: (key: string, defaultValue?: any) => any }) => ({
    email: {
        config: {
            provider: 'nodemailer',
            providerOptions: {
                host: env('SMTP_HOST', 'smtp.gmail.com'),
                port: env('SMTP_PORT', 587),
                secure: false, // Use true for SSL, false for TLS
                auth: {
                    user: env('SMTP_USERNAME', 'your-default-email@gmail.com'),
                    pass: env('SMTP_PASSWORD', 'your-default-app-password'),
                },
            },
            settings: {
                defaultFrom: env('SMTP_USERNAME', 'tech@student.mut.ac.ke'),
                defaultReplyTo: env('SMTP_USERNAME', 'tech@student.mut.ac.ke'),
            },
        },
    },
});
