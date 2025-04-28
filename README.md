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



---

# 📄 FULL FINAL `README.md`

```markdown
# Blog Post Management Website

This is a full-stack blog post management system developed using Node.js, Express.js, MongoDB Atlas, Passport.js, Pug, and Bootstrap 5.

It allows users to register, log in, create blog posts, edit and delete their own posts, search posts, and includes an admin panel for managing all users and posts.

---

## 📋 Features

- User Registration and Login (with Passport.js Local Strategy)
- Passwords securely hashed using bcrypt
- Session management using express-session
- Flash messages shown as Bootstrap 5 Toasts (auto-hide)
- Create, View, Edit, and Delete own blog posts
- Publicly view all blog posts
- Search blog posts by Title or Tags (partial match, case-insensitive)
- Responsive frontend using Pug and Bootstrap 5
- Input validation using Joi
- Admin Panel:
  - View all users
  - View all blog posts
  - Delete any blog post

---

## 🛠 Installed Dependencies

| Package | Purpose |
|---------|---------|
| express | Web server framework |
| mongoose | MongoDB object modeling |
| passport | Authentication middleware |
| passport-local | Local strategy for Passport |
| bcrypt | Password hashing |
| express-session | Session management |
| connect-flash | Flash messages |
| pug | Templating engine |
| joi | Form input validation |
| dotenv | Load environment variables |

---

## 🚀 How to Download and Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/karakib2k18/Blog-Post-Management-Website.git
cd Blog-Post-Management-Website
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Setup Environment Variables

Create a `.env` file in the root directory.

Inside `.env`, add:

```
MONGO_URI=mongodb+srv://blogDB:OdtsieFCVzCzaH0R@cluster0.3zctf.mongodb.net/blogDB?retryWrites=true&w=majority&appName=Cluster0
```

---

### 4. Start the Server

```bash
npm run dev
```
or
```bash
npm start
```

✅ The server will start at:

```
http://localhost:3000
```

---

## ✨ How to Access Admin Panel

1. Register a new user normally.
2. In MongoDB Atlas or Compass, manually set the user's `isAdmin` field to `true`.
3. Login with that user.
4. Visit:

```
http://localhost:3000/admin
```

---

## 🌍 Live Deployment (Optional)


**Live Link:**  
```
https://blog-post-management-website.onrender.com/posts
```

---

## 📢 Notes

- Passwords are securely hashed before saving to database.
- Input validation is performed server-side using Joi.
- Bootstrap 5 is used for responsive frontend.
- Flash messages use Bootstrap Toasts for better user experience.
- MongoDB Atlas used as database (cloud-hosted, free plan).
- Admin access is protected using middleware.

---

## 📚 Author

**KAZI ABDUR RAKIB**  
Curtin University | COMP6006 Web Application Frameworks Practical Assignment

---
```

---

# ✅ This README covers everything:

| Section | Status |
|---------|--------|
| Features overview | ✅ |
| All installed packages | ✅ |
| How to clone and install | ✅ |
| How to setup `.env` | ✅ |
| How to run | ✅ |
| Admin access instructions | ✅ |
| Live deployed link section (optional) | ✅ |
| Author information | ✅ |

---
