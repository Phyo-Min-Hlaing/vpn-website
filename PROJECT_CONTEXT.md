# Kophyo.top VPN - Project Documentation

## 1. Project Overview
**Name:** Kophyo.top VPN
**Description:** A modern, clean, frontend web application for selling and managing premium VPN keys. Built as a single-page application (SPA) using React.
**Tech Stack:** 
- **Framework:** React 18 (Vite)
- **Routing:** React Router v7 (Data Router pattern)
- **Styling:** Tailwind CSS v4
- **Icons:** `lucide-react`
- **Utility Libraries:** `clsx`, `tailwind-merge` (for class name merging)

---

## 2. Directory Structure

```
/src
  /app
    App.tsx                 # Main entry point, sets up RouterProvider
    routes.tsx              # Routing configuration
    /components
      /layout
        RootLayout.tsx      # Main wrapper (Header, Main Content, Footer)
        Header.tsx          # Sticky navigation bar
      /ui
        Button.tsx          # Reusable Button component (Primary, Outline, Ghost)
        Card.tsx            # Reusable Card components (Card, Header, Content, Footer)
    /pages
      Home.tsx              # Landing page (Hero, Features, Pricing, Downloads)
      PlanDetails.tsx       # Checkout/Plan specifics page
      Orders.tsx            # User order history and License Key management
      Profile.tsx           # User account details and quick actions
```

---

## 3. Design System & Theming

### Colors
- **Primary:** Brown (`#6B4226`) - Used for buttons, active states, icons, and highlights.
- **Secondary:** Light beige (`#F5F5F5`) - Used for secondary backgrounds and hover states.
- **Background:** Off-white (`#FAFAFA`) - Main page background.
- **Text:** Dark gray (`#1F1F1F`) - Default text color.
- **Borders:** Soft gray (`#E5E5E5`).

### Typography & Layout
- **Border Radius:** `12px` (used across buttons, cards, and containers).
- **Spacing:** Standard Tailwind 8pt grid (`p-4`, `m-6`, `gap-4`, etc.).
- **Shadows:** Subtle (`shadow-sm`) to keep the UI flat and modern.

---

## 4. Component Details

### Shared UI Components
#### `Button` (`/src/app/components/ui/Button.tsx`)
- Uses `forwardRef`.
- **Variants:** `primary` (Brown bg, white text), `outline` (Brown border, transparent bg), `ghost` (No background, subtle hover).
- **Sizes:** `sm`, `md` (default), `lg`.

#### `Card` (`/src/app/components/ui/Card.tsx`)
- Composed of sub-components: `<Card>`, `<CardHeader>`, `<CardContent>`, `<CardFooter>`.
- Defaults to white background, `12px` border radius, and soft gray border.

### Layout Components
#### `RootLayout` (`/src/app/components/layout/RootLayout.tsx`)
- Wraps all routes.
- Contains the `Header`, `<Outlet />` for page content, and `Footer`.
- Handles automatic smooth scrolling to hash links (e.g., `/#plans`).

#### `Header` (`/src/app/components/layout/Header.tsx`)
- Sticky top navigation (`backdrop-blur-md`).
- Highlights active routes automatically based on `location.pathname`.

---

## 5. Page Architectures

### 1. Home Page (`/src/app/pages/Home.tsx`)
- **Sections:**
  - **Hero:** Title, subtitle, feature tags, and primary CTAs.
  - **Why Choose Us:** 4-column grid displaying features (Instant Delivery, Global Servers, etc.).
  - **Pricing Plans:** Maps over an array of 5 plans. Highlights the "12 Months" plan dynamically.
  - **Download:** Grid of platforms (Windows, macOS, Android, iOS).

### 2. Plan Details Page (`/src/app/pages/PlanDetails.tsx`)
- **Route:** `/plan/:id` (e.g., `/plan/12m`).
- **Functionality:** Reads the `:id` parameter from the URL using `useParams()` and retrieves plan data from a static dictionary.
- **Layout:** Left side shows pricing and mock payment methods (Card, PayPal, Crypto); right side shows feature inclusions.

### 3. Orders Page (`/src/app/pages/Orders.tsx`)
- **Route:** `/orders`
- **Functionality:** Displays mock order history.
- **Clipboard API Note:** Contains a `copyToClipboard` function to copy VPN keys. It utilizes a fallback method (`document.execCommand('copy')` via a hidden textarea) to bypass modern Clipboard API restrictions in iframe/sandbox environments.

### 4. Profile Page (`/src/app/pages/Profile.tsx`)
- **Route:** `/profile`
- **Layout:** Displays user information, active status, and quick links to manage subscriptions.

---

## 6. Routing Configuration (`/src/app/routes.tsx`)
Uses React Router v7 `createBrowserRouter`:
```typescript
export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: 'plan/:id', Component: PlanDetails },
      { path: 'orders', Component: Orders },
      { path: 'profile', Component: Profile },
    ],
  },
]);
```

---

## 7. Future AI Context / Next Steps
If continuing development on this project with an AI, provide this document to the AI. Here are logical next steps for the project:

1. **State Management & Data Fetching:** Replace the static mock data arrays in `Home.tsx`, `PlanDetails.tsx`, and `Orders.tsx` with external API calls (e.g., React Query or basic `useEffect` fetches).
2. **Backend Integration (Supabase/Firebase):** 
   - Integrate authentication to protect the `/orders` and `/profile` routes.
   - Store user purchased keys in a secure database table.
3. **Payment Processing:** Integrate a Stripe Element or PayPal SDK inside `PlanDetails.tsx` where the mock payment buttons currently exist.
4. **Dynamic Downloads:** Map the platform buttons in the `Home` page Download section to actual binary URLs or app store links.