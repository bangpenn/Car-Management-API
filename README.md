# Car Management API

## Deskripsi
Proyek ini adalah sebuah REST API untuk manajemen data mobil dengan fitur authentication dan authorization. API ini dibangun menggunakan Express dan ObjectionJS, dengan PostgreSQL sebagai database.

## Fitur
- Endpoint untuk login sebagai superadmin.
- Endpoint untuk menambahkan admin (hanya superadmin yang dapat melakukan ini).
- Endpoint untuk registrasi sebagai member.
- CRUD data mobil (hanya admin dan superadmin yang dapat melakukan operasi ini).
- Endpoint untuk melihat daftar mobil yang tersedia.
- Endpoint untuk melihat current user berdasarkan token.
- Setiap data mobil mempunyai informasi mengenai:
  1. Siapa yang membuat data tersebut.
  2. Siapa yang menghapus data tersebut.
  3. Siapa yang terakhir kali mengupdate data tersebut.

## Teknologi
- Node.js
- Express.js
- TypeScript
- Objection.js
- Knex.js
- PostgreSQL
- bcryptjs
- jsonwebtoken
- passport.js

## Instalasi
1. Clone repositori ini:
   ```sh
   git clone https://github.com/username/car-management-api.git
   cd car-management-api
# Car Management API

## Deskripsi
Proyek ini adalah sebuah REST API untuk manajemen data mobil dengan fitur authentication dan authorization. API ini dibangun menggunakan Express dan ObjectionJS, dengan PostgreSQL sebagai database.

## Fitur
- Endpoint untuk login sebagai superadmin.
- Endpoint untuk menambahkan admin (hanya superadmin yang dapat melakukan ini).
- Endpoint untuk registrasi sebagai member.
- CRUD data mobil (hanya admin dan superadmin yang dapat melakukan operasi ini).
- Endpoint untuk melihat daftar mobil yang tersedia.
- Endpoint untuk melihat current user berdasarkan token.
- Setiap data mobil mempunyai informasi mengenai:
  1. Siapa yang membuat data tersebut.
  2. Siapa yang menghapus data tersebut.
  3. Siapa yang terakhir kali mengupdate data tersebut.

## Teknologi
- Node.js
- Express.js
- TypeScript
- Objection.js
- Knex.js
- PostgreSQL
- bcryptjs
- jsonwebtoken
- passport.js

## Instalasi
1. Clone repositori ini:
   ```sh
   git clone https://github.com/username/car-management-api.git
   cd car-management-api
2. npm install
3. Buat file .env di root direktori dan tambahkan konfigurasi berikut:
   ```sh
   PORT=3000
   DATABASE_URL=postgres://user:password@localhost:5432/car_management
   JWT_SECRET=your_jwt_secret
4. Lakukan migration untuk membuat tabel-tabel di database:
   ```sh
   npx knex migrate:latest
5. Seed database jika diperlukan:
   ```sh
   npx knex seed:run
6. Jalankan server:
   ```sh
   npm run dev


