# 📝 BlogApp

A modern, responsive blogging platform built with **React.js** and **Appwrite** BaaS for authentication, database, and media upload.

---

## 🚀 Summary

- Built a responsive blogging UI using React.js with **Appwrite** for auth, database, and media services.  
- Integrated **TinyMCE Editor** for rich text formatting including images, lists, headings, and embedded media.  
- Used **Redux** for global state management and **React Hook Form** for validated, accessible form handling.  
- Enforced **role-based access control** so only original authors can edit or delete their posts; thoroughly tested for stability.

---

## 📁 Repository Structure


---

## 🛠️ Technologies

- **React.js** with **Vite** – fast development and build tooling  
- **Appwrite BaaS** – handles auth, database, and file uploads :contentReference[oaicite:1]{index=1}  
- **TinyMCE** – rich text editing  
- **Redux Toolkit** – centralized state management  
- **React Hook Form** – form handling and validation  
- **Tailwind CSS** – utility-first responsive styling  

---

## 🔧 Setup & Run

### Prerequisites

- Node.js (v14+ recommended) and npm or yarn  
- An Appwrite instance (local Docker or hosted)

### 🔹 Quick Start

1. Clone the repo and install dependencies:

```bash
git clone https://github.com/kratinsoni/BlogApp-appwrite.git
cd BlogApp-appwrite
npm install        # or yarn install

# setup environment variables
VITE_APPWRITE_URL="https://<YOUR_APPWRITE_ENDPOINT>"
VITE_APPWRITE_PROJECT_ID="<PROJECT_ID>"
VITE_APPWRITE_DATABASE_ID="<DATABASE_ID>"
VITE_APPWRITE_COLLECTION_ID="<COLLECTION_ID>"
VITE_APPWRITE_BUCKET_ID="<BUCKET_ID>"

npm run dev        # or yarn dev
