// /**
//  * typeOrmModule.forRoot()를 사용하지 않고,
//  * 직접 DataSource를 생성하여 사용하는 방법
//  *  */

// import { DataSource } from 'typeorm';
// import { AppModule } from '../app.module';
// // import { DB, Security, DatabaseName } from '../config/config.interface';

// export const databaseProviders = [
//   {
//     provide: 'DATA_SOURCE',
//     useFactory: async () => {
//       const DB_TYPE = process.env.DB_TYPE;

//       // 0301_1212_ working
//       // ㄴ app.module.ts 내 TypeOrmModule.forRoot({})은 동작하지않음
//       const dataSource = new DataSource({
//         // type: (process.env.DB_TYPE), // error
//         // type: DB_TYPE, // error
//         type: 'postgres',
//         host: 'localhost',
//         port: 5432,
//         username:
//         password:
//         database:
//         entities: [__dirname + '/../**/*.entity{.ts,.js}'],
//         synchronize: true,
//       });
//       return dataSource.initialize();
//       // return;
//     },
//   },
// ];
