# FAQ Management System

## 📌 Project Overview

This is a simple **FAQ Management System** built using **Node.js, Express.js, and MongoDB (Atlas)**. The application allows users to **create and view FAQs** with multilingual support, caching using Redis, and a WYSIWYG editor for content formatting.

---

## 🚀 Features

- **Create and View FAQs**
- **WYSIWYG Editor** (CKEditor) for rich-text answers
- **Multilingual Translation** (via Google Translate API while fetching data)
- **Redis Caching** (Stores recently translated FAQs)
- **MongoDB Atlas Integration**
- **RESTful API for FAQs**

---

## 🏗️ Project Structure

```
📂 BharatFD-Assignment
│-- 📂 config          # Configuration files (DB & Redis)
│   ├── db.js         # MongoDB connection
│-- 📂 controllers     # API Controllers
│   ├── faqController.js # FAQ business logic
│-- 📂 models          # Mongoose Schema
│   ├── faq.js        # FAQ schema (Mongoose model)
│-- 📂 routes          # API Routes
│   ├── faqRoutes.js  # Express routes for FAQ API
│-- 📂 public          # Static Files (Frontend - HTML, CSS, JS)
│-- 📂 utils           # Helper utilities (Translation, etc.)
│   ├── translate.js  # Google Translate API integration
│   ├── cache.js      # Redis caching configuration
│-- 📂 tests           # Unit tests
│   ├── faq.test.js   # Unit tests for FAQ API
│-- 📜 .env            # Environment variables
│-- 📜 .gitignore      # Ignore node_modules, env files, etc.
│-- 📜 package.json    # Dependencies & scripts
│-- 📜 README.md       # Documentation
│-- 📜 server.js       # Main application file
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-repo/faq-management.git
cd faq-management
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the root directory and add:

```
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
GOOGLE_API_KEY=your_google_translate_api_key
```

### 4️⃣ Start Redis (For Caching)

#### 🔹 Linux/Mac

```bash
sudo apt install redis-server
redis-server
```

### 5️⃣ Start the Server

```bash
npm start
```

---

## 📡 API Endpoints

### **1️⃣ Create FAQ**

```http
POST /api/faqs
```

#### **Request Body (JSON)**

```json
{
  "question": "What is Flipkart?",
  "answer": "It is a ecommerce site."
}
```

#### **Response**

```json
{
  "message": "FAQ created successfully!"
}
```

### **2️⃣ Get FAQs (With Translation & Caching)**

```http
GET /api/faqs
or
GET /api/faqs?lang=hi
```

---

## 🛠️ Technologies Used

- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas (Mongoose)
- **Cache:** Redis
- **Editor:** CKEditor 5
- **Translation:** Google Translate API from Google Cloud

---

## 📌 Future Enhancements

- ✅ **User Authentication** (Admin panel for managing FAQs)
- ✅ **Pagination for FAQs**
- ✅ **Dockerizing the Project**

---

## 📝 License

This project is **open-source** under the **MIT License**.

---

🚀 **Happy Coding!** 😊
