# Kophyo.top VPN - UI Design System

## Overview
The Kophyo.top VPN admin dashboard is designed with a modern, minimal aesthetic tailored for SaaS multi-tenant applications. The UI is built using Next.js (or React Router in the SPA version) and Shadcn UI components.

## Core Aesthetic
- **Theme**: Minimal and clean, optimized for data-dense dashboards.
- **Primary Color**: Brown (`#6B4226`), giving the dashboard a professional and distinct look.
- **Success Color**: Green (`#16A34A`), used for active statuses and positive trends.
- **Border Radius**: 12px (`rounded-xl` in Tailwind) applied consistently across cards, buttons, and badges.
- **Shadows**: Soft shadows (`shadow-sm`) to elevate cards without overwhelming the view.
- **Borders**: Subtle borders (`border-border`) on cards to add structure against the background.

## Layout
- **Navigation**: Collapsible sidebar navigation to maximize screen real estate when viewing tables and metrics.
- **Header**: Contains global actions, user profile, and breadcrumbs/title.
- **Content Area**: Fluid layout with responsive grids (1 column on mobile, up to 4 columns on desktop for stats).

## Component Guidelines

### Cards (`<Card>`)
Used to group related information.
- Always utilize `<CardHeader>`, `<CardTitle>`, and `<CardContent>`.
- `<CardDescription>` is used to provide context immediately below the title.

### Tables (`<Table>`)
Used for displaying lists (Customers, Resellers, Keys, etc.).
- Clean layout without vertical borders.
- Badges should be used for status columns (e.g., Active, Suspended, Expired).
- The "Actions" column should contain ghost buttons (`variant="ghost"`) with Lucide icons (e.g., `Eye`, `Edit2`) for row-level operations.

### Badges (`<Badge>`)
Used for statuses.
- **Success**: Active subscriptions or operational VPN statuses.
- **Warning**: Pending actions or nearing expiration.
- **Danger**: Expired or suspended accounts.

### Buttons (`<Button>`)
- **Primary**: Solid brown background, used for primary actions (e.g., "Add Reseller", "Create Key").
- **Ghost**: Transparent background, used for secondary or inline actions (e.g., table actions, back buttons).

### Typography
- **Headings**: Semibold, clear hierarchy.
- **Secondary Text**: Muted foreground (`text-muted-foreground`), used for descriptions, email addresses in tables, and less critical data.

## Iconography
- Uses **Lucide React**.
- Standard icon sizes: `16px` for inline elements/buttons, `20px` for headers/stats.
