# Implementation Plan - Immersive 3D Portfolio

## Objective
Create a high-performance, immersive 3D portfolio for Sathiskumar Saravanan, a Research Engineer at TCS specializing in Full Stack and Immersive Applications (XR/AR). The site will replace the old portfolio with a modern, "wow" factor design.

## Tech Stack
- **Frontend:** Next.js (latest) - for performance, SEO, and robust routing.
- **Backend:** Python FastAPI - for the blog content management system.
- **Database:** SQLite (local dev) / PostgreSQL (prod) - for storing blog posts.
- **Language:** TypeScript (Frontend), Python 3.10+ (Backend).
- **Styling:** Tailwind CSS - for rapid, modern styling with glassmorphism support.
- **3D Engine:** React Three Fiber (R3F) & Drei - for the immersive 3D background and elements.
- **Animations:** Framer Motion - for smooth DOM element transitions.
- **Deployment:** Vercel (Frontend), Railway/Render (Backend).

## Design Concept
**Theme:** "Future Tech / Immersive Reality"
- **Background:** A dark, interactive 3D scene. Options:
    - *Abstract Particles:* Connecting lines/nodes representing AI/Research.
    - *3D Workspace:* A stylized 3D desk or computer setup.
    - *Floating Geometry:* Abstract shapes reacting to mouse movement.
    *Recommendation:* Abstract Particles/Network to symbolize "Research" and "Logic".
- **Colors:** Deep tech aesthetics.
    - Background: Very dark blue/black (`#0a0a0a` or `#050B14`).
    - Accents: Neon Cyan (`#00F0FF`) for "XR" and Purple (`#7000FF`) for "Immersive".
- **UI Elements:** Glassmorphism (frosted glass) cards to float above the 3D scene without blocking it.

## Content Structure

### 1. Hero Section
- **Visual:** Full-screen 3D immersive background.
- **Content:**
    - Large Typography: "Sathiskumar Saravanan"
    - Subtitle: "Research Engineer @ TCS | XR Enthusiast | Full Stack Developer"
    - CTA Buttons: "View Projects", "Contact Me".

### 2. About Me
- **Visual:** Glass card on the side or center.
- **Content:**
    - Highlight expertise in **Extended Reality (AR/VR)**, **AI**, and **Full Stack**.
    - Mention TCS Research Engineer role.
    - Personal mission: Bridging education and technology (from old portfolio).

### 3. Experience (Timeline)
- **Visual:** Vertical timeline with glowing nodes.
- **Data:**
    - **TCS:** Research Engineer / Assistant System Engineer. Focus on Immersive Apps & Full Stack.
    - (Any specific past roles from LinkedIn/Resume can be added here).

### 4. Projects (3D Gallery)
- **Visual:** Interactive 3D carousel or grid of cards that tilt on hover.
- **Key Projects:**
    - **EduAR:** AR-based learning platform.
    - **Virtual Business Cards:** AR Android app.
    - **Without Face Mask Detection:** Python/OpenCV.
    - **College Webpage:** Full stack web.

### 5. Skills
- **Visual:** "Tech Stack" visualizer. Either a 3D cloud of icons or clean progress bars/badges.
- **Categories:**
    - **Core:** HTML, CSS, JS, TS.
    - **Frontend:** React, Next.js, Angular, Tailwind, Three.js.
    - **Backend:** Node.js, Express, Java Spring Boot, PHP.
    - **Immersive:** Unity, WebAR, ARCore/ARKit.
    - **Database:** MongoDB, MySQL.

### 6. Blog & Admin (New)
- **Public Blog Page:**
    - Fetches articles from the FastAPI backend.
    - Card layout sharing the same glassmorphism design.
- **Admin Dashboard:**
    - Protected route (e.g., `/admin`).
    - **Features:** Create, Edit, Delete posts. Markdown editor for writing.
- **Backend API (FastAPI):**
    - `GET /posts`: Public list.
    - `POST /login`: Admin authentication (JWT).
    - `CRUD /posts`: Protected management endpoints.

### 7. Contact
- **Visual:** Simple, clean form + Social Links (big glowing icons).
- **Links:** LinkedIn, GitHub, Email.

## Development Workflow
1.  **Project Setup:** Create `client` (Next.js) and `server` (FastAPI) directories.
2.  **Frontend Core:**
    - Initialize Next.js + Tailwind + R3F.
    - Build `CanvasWrapper` and generic layouts.
3.  **Backend Core:**
    - Setup Python virtual environment.
    - Install FastAPI, SQLAlchemy, Pydantic.
    - Create `Post` model and API endpoints.
4.  **Integration:**
    - Connect Frontend Blog page to Backend API.
    - Implement Admin login and entry creation.
5.  **3D & Polish:** Add the immersive background and tilt effects.
6.  **Final Review:** SEO and Deployment.

## Next Steps
Please approve this plan or suggest changes (e.g., if you prefer a specific 3D theme like a "Gaming Room" vs "Abstract Tech"). Once approved, I will start by setting up the project.
