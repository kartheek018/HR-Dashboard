## Hr Dashboard

A feature-rich HR Performance Dashboard built with **Next.js**, designed for HR managers to efficiently track employee performance, manage bookmarks, and gain actionable insights through dynamic visualizations and detailed profiles.

### 🚀 Project Overview
This mini HR dashboard provides an intuitive interface to:

View and manage employee data fetched from dummy APIs

Search and filter employees by multiple criteria

Access detailed employee profiles with tabbed views

Bookmark and promote employees with quick UI actions

Analyze performance trends with interactive charts

Built with scalability, modularity, and user experience in mind, the dashboard also supports dark/light modes and responsive design for seamless usage across devices.
### 🔧 Tech Stack
React (with Next.js App Router) — modern, server/client hybrid rendering

Tailwind CSS — utility-first styling for rapid UI development

JavaScript (ES6+) — clean, modern scripting

State Management: Context API — for efficient global state handling

Charting: Chart.js — to visualize employee performance and trends

Authentication: NextAuth.js — for secure and extensible user authentication

### 🎯 Features Implemented
| Feature                                                      | Status |
| ------------------------------------------------------------ | ------ |
| **Dashboard Homepage (`/`)**                                 | ✅ Done |
| - Fetch & display employee data from API                     | ✅ Done |
| - User cards with Name, Email, Age, Department               | ✅ Done |
| - Performance rating bar (1-5 stars)                         | ✅ Done |
| - Action buttons: View, Bookmark, Promote                    | ✅ Done |
| **Search & Filter**                                          | ✅ Done |
| - Search bar (name, email, department)                       | ✅ Done |
| - Multi-select filter dropdown (department, rating)          | ✅ Done |
| **Dynamic User Details (`/employee/[id]`)**                  | ✅ Done |
| - Detailed profile: address, phone, bio, history             | ✅ Done |
| - Performance rating with stars and badges                   | ✅ Done |
| **Bookmark Manager (`/bookmarks`)**                          | ✅ Done |
| - List bookmarked employees                                  | ✅ Done |
| - Remove bookmarks                                           | ✅ Done |
| - Promote and Assign to Project UI actions                   | ✅ Done |
| **Analytics Page (`/analytics`)**                            | ✅ Done |
| - Department-wise average rating chart                       | ✅ Done |
| - Bookmark trends chart                                      | ✅ Done |
| **State Management (Context API)**                           | ✅ Done |
| **Responsive Design (Mobile to Desktop)**                    | ✅ Done |
| **Dark/Light Mode (Tailwind CSS)**                           | ✅ Done |
| **Custom Hooks (useBookmarks)**                              | ✅ Done |
| **Reusable Components (Card, Button)**                       | ✅ Done |
| **Authentication (NextAuth.js)**                             | ✅ Done |
| **Create User Modal with Validation**                        | ✅ Done |
| **Pagination / Infinite Scroll**                             | ✅ Done |
| **Animations (Tab transitions with Tailwind/Framer Motion)** | ✅ Done |

### 📦 Setup Instructions
#### Clone the repository
   git clone https://github.com/yourusername/HR-Dashboard.git
    cd HR-Dashboard
#### Install dependencies
   npm install
#### Run the development server
   npm run dev
#### Open http://localhost:3000 to view the dashboard
#### Authentication
   Register or login using the mock authentication powered by NextAuth.js

### 📷 Screenshots
#### 1. Login page
   ![image](https://github.com/user-attachments/assets/d8bf5219-310b-48b2-b2c4-8fe965757fa8)
#### 2. Home page
   ![image](https://github.com/user-attachments/assets/55c7557e-1f79-44de-b820-28d268f03279)
#### 3. Users page
   ![image](https://github.com/user-attachments/assets/8e39b42c-b8b0-4d87-bd13-5b2ac36354f5)
#### 4. Users page with filtering
   ![image](https://github.com/user-attachments/assets/7ecf87ec-2ddc-4de9-ae7d-3875e273d6b0)
#### 5. Create new User 
   <img width="1060" alt="image" src="https://github.com/user-attachments/assets/a196e7a1-d9ce-4237-a65a-fc5a26f61f58" />
   ![image](https://github.com/user-attachments/assets/98813805-cb8c-4fbc-be96-fd995d4105f9)
#### 7. Adding users to Bookmarks
   <img width="1061" alt="image" src="https://github.com/user-attachments/assets/e372fb1a-b6cf-44dd-a71e-e553cf0ac6ac" />
#### 8. Bookmarked users
   ![image](https://github.com/user-attachments/assets/7e473fdf-045c-46fe-9d5e-fc7628477264)
#### 9. Viewing the users
   ![image](https://github.com/user-attachments/assets/37a282d4-f422-4b24-92dd-0d3b21b226fb)
#### 10. Removing the users from Bookmarks
    ![image](https://github.com/user-attachments/assets/1fe306ac-6bb8-4239-8e19-c0b93ed0a44c)
#### 11. Analytic Dashboard
    ![image](https://github.com/user-attachments/assets/f5c685bb-ab39-4af8-8ed6-c1310de19fa9)
#### 12. Dark Mode
    ![image](https://github.com/user-attachments/assets/e8638b0b-8f2a-4090-ac5d-a281474c9ea7)
#### 13. Light Mode
    ![image](https://github.com/user-attachments/assets/d55898d1-80b0-4115-97cf-1384fb14b689)
#### 14. Responsive pages
    ![image](https://github.com/user-attachments/assets/a970dc7a-35a1-43dd-801a-dff8eff325c3)

