blog-post-management/
│
├── config/
│   └── passportConfig.js
│
├── controllers/
│   ├── authController.js
│   ├── postController.js
│   └── adminController.js
│
├── models/
│   ├── User.js
│   └── Post.js
│
├── routes/
│   ├── authRoutes.js
│   ├── postRoutes.js
│   └── adminRoutes.js
│
├── middleware/
│   ├── authMiddleware.js
│   ├── adminMiddleware.js
│   └── validators.js
│
├── views/
│   ├── layouts/
│   │   └── layout.pug
│   ├── auth/
│   │   ├── login.pug
│   │   └── register.pug
│   ├── posts/
│   │   ├── index.pug
│   │   ├── new.pug
│   │   ├── edit.pug
│   │   └── show.pug
│   ├── admin/
│   │   └── panel.pug
│   └── error.pug
│
├── public/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── main.js
│
├── app.js
├── package.json
├── package-lock.json
├── .gitignore
├── README.md



nodemon.json==>
{
  "watch": ["app.js", "controllers", "models", "routes", "middleware"],
  "ext": "js pug",
  "ignore": ["node_modules"],
  "exec": "node app.js"
}


blogDB
OdtsieFCVzCzaH0R


# Blog Post Management System

This is a blog post management web application developed using Node.js, Express.js, MongoDB Atlas, Passport.js, Pug, and Bootstrap 5.  
It was created for the Web Application Frameworks (COMP6006) Practical Assignment.

---

## 📋 Features

- User Registration and Login (Authentication using Passport.js Local Strategy)
- Passwords securely hashed with bcrypt
- Session management using express-session
- Flash messages for errors and success (Bootstrap alerts)
- Create, View, Edit, and Delete your own blog posts
- Search blog posts by Title or Tags (case-insensitive)
- Responsive Frontend built with Pug and Bootstrap 5
- Admin Panel (Bonus +5 Marks)
  - View all users
  - View all blog posts
  - Delete any blog post

---

## 🛠 Technologies Used

- Node.js
- Express.js
- MongoDB Atlas with Mongoose
- Passport.js (Local Strategy)
- bcrypt
- express-session
- connect-flash
- Pug Template Engine
- Bootstrap 5
- Joi (for form validation)

---

## 🚀 How to Run the Project Locally

### 1. Install Dependencies

```bash
npm install


## 2. Create a .env file in your project root Inside .env, add:

MONGO_URI=your_mongodb_atlas_connection_string
Example: MONGO_URI=mongodb+srv://blogDB:OdtsieFCVzCzaH0R@cluster0.3zctf.mongodb.net/blogDB?retryWrites=true&w=majority&appName=Cluster0



## 3. Start the Server: npm run dev
Server will run at: http://localhost:3000# Blog-Post-Management-Website
# Blog-Post-Management-Website
