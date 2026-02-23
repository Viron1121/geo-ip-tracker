
# Geo IP Tracker

## Requirements
- PHP 8.3+  
- MySQL  
- Composer  
- Node.js 18+  
- npm  

1. git clone https://github.com/Viron1121/geo-ip-tracker.git
2. cd backend
3. install package "composer install"
4. create .env file on backend folder 
   in my case i am using mysql
   paste this configuration on .env
   
   ```env
   DB_CONNECTION=mysql # change to your database driver (e.g., pgsql, sqlite, sqlsrv)
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=ip_api
   DB_USERNAME=root
   DB_PASSWORD=
   ```

    php artisan migrate  
    php artisan db:seed --class=UserSeeder
    php artisan serve

## Go for client side folder
5. cd react-ip-app
6. npm install
7. npm run dev

go to http://localhost:5173/
make sure the backend is running.

Please email me at viron3210@gmail.com
 if you need any clarification regarding cloning


