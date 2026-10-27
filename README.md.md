# 🥩 Meat & Seafood Product Catalog (React + TypeScript)

A responsive, accessible Product Catalog built with **React**, **Vite**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**.

This project showcases core TypeScript principles inside a modern React application, including strict typing, literal unions, event handler typing, keyboard accessibility, responsive grid layouts, and clean component isolation without external APIs or heavy state management libraries.

---

## 📋 Features

- **Local Mock Dataset**: 12 curated products distributed across 3 categories (`red-meat`, `fish`, `white-meat`).
- **Combined Filtering Pipeline**: Instant, case-insensitive search by product name working alongside a category dropdown (`CategoryFilterValue`).
- **Stateful Feedback (Empty State)**: A descriptive empty-state message with a one-click filter reset button when no items match.
- **Product Details Modal (Optional Extension)**: Accessible modal dialog triggered upon item selection, strictly modeled with `Product | null` state.
- **Accessible Design & Keyboard Navigation**: Label association using `htmlFor` and `id`, high-visibility focus rings (`focus-visible:ring-2`), and complete keyboard dismissibility (`Escape` key listener).

---

## 🚀 Getting Started

Follow these steps to set up and run the application locally:

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 18 or higher recommended) and `npm` installed.

### 1. Clone the Repository & Checkout the Branch

```bash
git clone https://github.com/hazemziead50/Product-Catalog.git
cd Product-Catalog
git checkout feat/product-catlog
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open your browser at `http://localhost:5173`.

---

## 🛠️ Verification & Build Commands

Before submitting code, ensure that all static analysis, type checking, and production builds pass with zero warnings or errors:

| Command | Tool / Target | Description |
| :--- | :--- | :--- |
| `npx tsc --noEmit` | **TypeScript Compiler** | Verifies type safety across the entire project in check mode without emitting JS files. |
| `npm run lint` | **ESLint** | Checks for syntax issues, unused imports, and React hooks rule violations. |
| `npm run build` | **Vite Production Build** | Compiles TypeScript and packages optimized production assets into `/dist`. |
| `npm run preview` | **Local Production Preview**| Serves the generated `/dist` build locally to verify production parity. |

> **Note on TypeScript Configuration**:  
> `"strict": true` is enforced in `tsconfig.app.json` (and `tsconfig.json`). The codebase contains **zero** explicit `any`, **zero** `@ts-ignore` comments, and avoids unsafe type assertions.

---

## 🔍 Three Concrete Mistakes TypeScript Caught During Development

As required by the assignment guidelines, here are three real-world issues intercepted and resolved via TypeScript during implementation:

### 1. Literal Union Violation When Localizing UI Filter Values
* **The Mistake:**  
  When attempting to set the initial or selected category state to the Arabic text `"جميع الأصناف"` instead of the internal identifier `"all"`, TypeScript flagged an immediate assignment error:
  
* **Why TypeScript Caught It:**  
  The state was defined with the explicit literal union type:
  ```typescript
  export type CategoryFilterValue = Category | "all";
  ```
  TypeScript strictly enforced literal equality at compile time. It prevented passing an unregistered arbitrary string that would cause `product.category === selectedCategory` to evaluate to `false` across every product, preventing a silent bug where the product grid would render empty.
* **The Resolution:**  
  We resolved the issue by keeping the programmatic key strictly typed as `"all"` in the state logic and passing `"جميع الأصناف"` solely as the UI display label inside `<SelectItem value="all">جميع الأصناف</SelectItem>`, decoupling internal state from localized presentation text.

---

### 2. Prop Contract Mismatch on `ProductList` (Missing Component Callbacks)
* **The Mistake:**  
  In `App.tsx`, we passed `onSelectProduct` and `onResetFilters` to the `<ProductList />` component:
  
  TypeScript rejected the component instantiation:
  ```text
  Type '{ products: Product[]; onSelectProduct: (p: Product) => void; onResetFilters: () => void; }'
  is not assignable to type 'ProductListProps'.
    Property 'onSelectProduct' does not exist on type 'ProductListProps'.
  ```
* **Why TypeScript Caught It:**  
  The `ProductListProps` interface initially defined only `products: Product[]`. TypeScript prevented passing unhandled callbacks into child components that were not prepared to accept or execute them.
* **The Resolution:**  
  Updated `ProductListProps` in `src/components/ProductList.tsx` to include the explicit callback contracts:


---

### 3. Null Reference Exception on Modal State (`Product | null`)
* **The Mistake:**  
  The selected item state was typed as `Product | null` (`useState<Product | null>(null)`). In `ProductDialog.tsx`, direct access to properties (such as `product.name`, `product.price`, `product.category`) triggered:
  ```text
  'product' is possibly 'null'. (TS18047)
  ```
* **Why TypeScript Caught It:**  
  With `strictNullChecks` active under `"strict": true`, TypeScript disallowed property access on any value that could be `null` or `undefined` at runtime. In pure JavaScript, this would throw an unhandled `TypeError: Cannot read properties of null (reading 'name')` and crash the application.
* **The Resolution:**  
  Added an early return type guard to narrow the type prior to JSX rendering:
  

---

## 🏛️ Architecture & Type System Notes

### Why TypeScript Does Not Replace Runtime Validation
TypeScript is a **compile-time tool** whose types are completely erased during Vite build bundling, producing plain JavaScript. Consequently:
- TypeScript cannot inspect or validate live data arriving over network fetches, local storage, or uncontrolled user text inputs during application execution.
- If an external source provides malformed data (such as missing IDs or numerical prices formatted as strings), TypeScript's static annotations cannot prevent runtime errors.
- Therefore, runtime guards (e.g., custom type predicates like `isCategory(val: string): val is Category` or validation libraries like Zod) remain essential for boundary safety.

---

## 🔗 Links & Submissions

- **Branch**: `feat/product-catlog`
- **Repository URL**: `https://github.com/hazemziead50/Product-Catalog`
- **Live Deployment (Vercel)**: `https://<YOUR_DEPLOYMENT_URL>.vercel.app`
- **Pull Request (Open & Unmerged)**: `https://github.com/<YOUR_USERNAME>/<YOUR_REPO>/pull/1`