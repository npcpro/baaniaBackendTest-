/// create db and change config before install and run ///
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

npm install
npm run tsc
npm run dev


 // จาก ฟอร์มของ https://codetest-pre-interview-frontend.pages.dev/ ส่ง price ที่เปน string มา จึง convert ให้

