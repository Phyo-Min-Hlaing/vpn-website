# Kophyo.top VPN — UI Design Specifications

## 1. Overview
Kophyo.top VPN is a web application designed to offer premium VPN keys for unlimited privacy. The UI is built to be clean, minimal, and modern, ensuring a trustworthy and professional user experience across all devices.

---

## 2. Design System

### Colors
- **Primary:** Brown (`#6B4226`) - Used for primary actions, active states, and highlights.
- **Secondary:** Light beige (`#F5F5F5`) - Used for subtle backgrounds and secondary button hover states.
- **Background:** Off-white (`#FAFAFA`) - Used as the main application background.
- **Text:** Dark gray (`#1F1F1F`) - Used for primary text to ensure readability.
- **Border:** Soft gray (`#E5E5E5`) - Used for component borders and dividers.

### Typography & Spacing
- **Font:** Modern sans-serif (system default or Inter).
- **Scale:** Utilizes a standard Tailwind CSS 8pt grid system for padding and margins.
- **Border Radius:** `12px` rounded corners for cards, buttons, and input fields.
- **Shadows:** Subtle shadows to create depth without overwhelming the minimal design.

### Tone
- Professional
- Simple
- Trustworthy
- Clean UI

---

## 3. UI Components

### Buttons
- **Primary:** Brown background with white text. Solid, rounded (`12px`).
- **Secondary / Outline:** Transparent background with a brown border and brown text.
- **Ghost:** Transparent background, dark text, subtle gray hover state.

### Cards
- **Style:** White background, soft gray border (`#E5E5E5`), and `12px` rounded corners.
- **Interactive:** Hovering may trigger a slight shadow or border color change (e.g., to Primary Brown) for emphasis.

### Icons
- **Style:** Minimal, line-style icons (using Lucide-React).
- **Color:** Neutral dark gray by default; highlighted in Primary Brown when active or representing a core feature.

---

## 4. Layout Structure

### Header (Navbar)
- **Sticky positioning** with a slight translucent blur (`backdrop-blur-md`).
- **Logo:** Shield icon + "Kophyo.top VPN" text.
- **Navigation Links:** Home, Plans, Download, Orders, Profile.
- **Call-to-Action (CTA):** Primary "Buy VPN" button linking to the pricing section.

### Footer
- Simple bottom bar with copyright information.
- Background: White with a top border.

---

## 5. Page Designs

### 1. Home Page (`/`)
- **Hero Section:**
  - Bold value proposition: "Premium VPN Keys for Unlimited Privacy".
  - Feature highlights (No Logs, High Speed, Secure) with inline icons.
  - CTAs: "Buy Now" (Primary) and "Download App" (Outline).
- **Why Choose Us:**
  - 4-column grid layout displaying core features (Instant Delivery, Global Servers, Fast & Stable, No Logs Policy) within minimal cards.
- **Pricing Plans:**
  - 5 tier options (1 Month to 24 Months).
  - Highlights the most popular plan (12 Months) with a border ring and badge.
  - Clearly displays savings percentages.
- **Download Section:**
  - Grid displaying supported platforms (Windows, macOS, Android, iOS).
  - Clean hover effects revealing a "Download" link.

### 2. Plan Details Page (`/plan/:id`)
- **Layout:** Two-column split.
  - **Left Column:** A dynamic multi-step checkout flow.
    - **Step 1 (Details):** Displays the selected plan name, price, savings badge, and available payment methods (KBZ Pay, Wave Pay, AYA Pay). Includes a prominent "Buy Now" CTA.
    - **Step 2 (Form):** Replaces the payment options with a submission form. Displays payment instructions with account details. Form fields include: Your Name, Contact Details (Viber, Telegram, Mobile Number), and a drag-and-drop file upload for the payment screenshot. CTA: "Submit Payment".
    - **Step 3 (Success):** A confirmation screen indicating the payment is being verified and the VPN key will be sent to the provided contact.
  - **Right Column:** A detailed list of features included in the plan with descriptive text and icons.

### 3. Orders Page (`/orders`)
- **Layout:** List view of historical and active orders.
- **Card Design:** 
  - Shows plan details, order ID, date, status badge (Active/Expired), and expiration date.
  - Features a masked license key view with a "Copy Key" action button. (Includes fallback mechanisms for clipboard API restrictions).

### 4. Profile Page (`/profile`)
- **Header:** Title with a subtle "Logout" ghost button.
- **User Info Card:** Displays avatar, name, email, account status, and join date.
- **Quick Actions Card:** Links to manage subscriptions/orders or contact support to change email.

---

## 6. UX & Development Notes
- **Routing:** Built using React Router's Data mode pattern for seamless transitions between pages.
- **Responsiveness:** Mobile-first approach. Grids automatically collapse into single columns on smaller screens.
- **Interactions:** Smooth scrolling implemented for anchor links (e.g., `#plans`, `#download`) on the homepage.
