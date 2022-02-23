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



//// 
เนื่องจากเวลาจำกัด ซึ่ง ปกติ แล้ว ผมใช้ nest js typescript
แต่ว่าแต่ ตัวเปน express ก็เลย ไม่ได้ ใส่ dto สำหรับ ขา request ซึ่งปกติบน nest js จะใส่เสมอ

