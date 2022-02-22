export const DBconfig: any = {
		type: 'postgres',
		host: 'localhost',
		port: 5432,
		username: 'postgres',
		password: '1234',
		database: 'baania',
		entities: ["build/database/entities/**/*.js"],
		synchronize: true,
		name: 'baania',
}
