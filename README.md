# Next.js Scaffold Template 🚀

A robust, type-safe, and test-ready Next.js 15+ starter template. This project is pre-configured with the modern web stack to help you move from idea to implementation in minutes.

## 🛠️ The Stack

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) (Button, Input, Label)
- **Data Fetching**: [TanStack Query v5](https://tanstack.com/query/latest)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Validation**: [Zod](https://zod.dev/)
- **Testing**: [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- **Package Manager**: [pnpm](https://pnpm.io/)

## ✨ Key Features

- ✅ **Pre-configured Providers**: TanStack Query setup with a global client provider.
- ✅ **Test Utilities**: Custom `renderWithClient` wrapper for testing components that use TanStack Query.
- ✅ **Type-safe Forms**: Seamless integration between React Hook Form and Zod validation.
- ✅ **Modern Aesthetics**: Built-in shadcn/ui components for a premium look and feel.
- ✅ **Ready-to-use Sample**: Includes a functional `SampleForm` demonstrating the full stack.

## 🚀 Getting Started

Bootstrap your new project in one command using `degit`:

```bash
npx degit Sammydepoj/next-js-scaffold my-awesome-app
```

### Setup

```bash
cd my-awesome-app
pnpm install
pnpm dev
```

## 📜 Available Scripts

- `pnpm dev` - Start the development server.
- `pnpm build` - Build the production application.
- `pnpm start` - Run the built application.
- `pnpm lint` - Run ESLint checks.
- `pnpm test` - Run the Jest test suite.
- `pnpm test:watch` - Run Jest in watch mode.

## 🧪 Testing

This template takes testing seriously. I've included:

- A sample page test (`src/__tests__/page.test.tsx`).
- A comprehensive form validation/submission test (`src/__tests__/sample-form.test.tsx`).

To run tests:

```bash
pnpm test
```

## 🤝 Contributing

Feel free to fork this repository and submit pull requests for any features or bug fixes!
