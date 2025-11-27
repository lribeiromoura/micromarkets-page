# Micromarkets Portal

This project is a technical frontend implementation of a Micromarkets Portal built with modern web technologies, focusing on scalability, performance, maintainability, and user experience.

The application simulates micromarkets, allowing users to filter, select, and view detailed information.

---

## 🚀 Tech Stack

- Vite – Fast build and development environment  
- React + TypeScript – Component-based architecture with strong typing  
- Tailwind CSS – Utility-first styling  
- shadcn/ui – Accessible, production-ready UI components  
- i18next – Internationalization (English & Spanish)  
- Ignite UI (Infragistics) – Data grid and enterprise components  
- Lucide Icons  

---

## 📐 Layout & UX Decisions

The layout was intentionally designed to stay as close as possible to the original legacy system, while still introducing a more modern and clean visual approach.

This decision was based on my personal experience with user resistance to drastic UI changes, especially in enterprise environments.
I have personally gone through the migration of a large legacy system from AngularJS to React, and one of the biggest challenges was not technical — it was user adaptation.

For that reason, the layout keeps:

- A persistent sidebar  
- A top search/filter bar  
- A focused main content area  

This minimizes the learning curve and reduces friction during adoption.

---

## 📝 Forms & Validation

For a real-world, production-ready version, the application would use:

- **React Hook Form** for:
  - High performance  
  - Reduced re-renders  
  - Scalable form state management  

- **Zod** for:
  - Strong schema validation  
  - Clear error handling  
  - Type-safe form validation  

This setup ensures maintainability, predictability, and robustness.

---

## 🎨 Design System Consideration

For a final enterprise-grade version, I would recommend considering Microsoft Fluent UI as the Design System.

Fluent provides:

- Native Windows look & feel  
- High accessibility standards  
- Visual familiarity for corporate users  
- Lower resistance during UI modernization  

This makes the user experience more uniform and intuitive, especially for companies already working inside the Microsoft ecosystem.

**I personally prefer using shadcn/ui to build web applications, but this Design System could be more comfortable for users coming from a .NET platform.**

---

## 🌍 Internationalization (i18n)

The project supports:

- English  
- Spanish  

Language switching is handled via i18next, preparing the application for international expansion.

---

## 📂 Project Setup

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

---

## ✅ Key Architectural Goals

- Clean and scalable architecture  
- Strong typing with TypeScript  
- Decoupled UI components  
- Performance-first mindset  
- Real-world enterprise UX decision