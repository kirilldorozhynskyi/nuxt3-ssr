# Components Structure

This directory contains all Vue components organized by their purpose and functionality.

## Directory Structure

```
src/components/
├── app/          # Layout components (Header, Footer, Sidebar, etc.)
├── ui/              # Base UI components (Button, Card, Input, etc.)
├── forms/           # Form-related components (Input, Select, Checkbox, etc.)
├── product/         # Product-specific components (ProductCard, ProductList, etc.)
├── common/          # Common utility components (Loading, Error, etc.)
└── README.md        # This file
```

## Component Categories

### Layout Components (Root & `/app`)
Components that define the overall structure of the application:
- `AppHeader.vue` - Main navigation header
- `AppFooter.vue` - Main footer
- `Sidebar.vue` - Navigation sidebar (future)
- `Layout.vue` - Main layout wrapper (future)

### UI Components (`/ui`)
Reusable base components that can be used throughout the application:
- `BaseButton.vue` - Configurable button component


### Form Components (`/forms`)
Components specifically for form handling:
- `FormInput.vue` - Form input with validation (future)
- `FormSelect.vue` - Select dropdown component (future)
- `FormCheckbox.vue` - Checkbox component (future)
- `FormSubmit.vue` - Form submission button (future)

### Product Components (`/product`)
Components specific to product functionality:
- `ProductCard.vue` - Product display card
- `ProductList.vue` - Product grid/list (future)
- `ProductFilter.vue` - Product filtering (future)
- `ProductSearch.vue` - Product search (future)

### Common Components (`/common`)
Utility components used across the application:
- `LoadingSpinner.vue` - Loading indicator
- `ErrorMessage.vue` - Error display component
- `EmptyState.vue` - Empty state display (future)
- `Pagination.vue` - Pagination controls (future)

## Naming Conventions

- **Layout components**: `App` prefix (e.g., `AppHeader`, `AppFooter`)
- **Base UI components**: `Base` prefix (e.g., `BaseButton`, `BaseCard`)
- **Feature components**: Feature-specific prefix (e.g., `ProductCard`, `UserProfile`)
- **Common components**: Descriptive names (e.g., `LoadingSpinner`, `ErrorMessage`)

## Usage Guidelines

1. **Import components**: Use Nuxt's auto-import feature - no manual imports needed
2. **Props validation**: Always define TypeScript interfaces for component props
3. **Event handling**: Use `defineEmits` for component events
4. **Styling**: Use Tailwind CSS classes for consistent styling
5. **Accessibility**: Include proper ARIA attributes and keyboard navigation

## Type Definitions

Common types are defined in `src/types/components.ts` and should be imported when needed:

```typescript
import type { Product, ButtonVariant } from '~/types/components'
```

## Adding New Components

When adding new components:

1. Choose the appropriate directory based on the component's purpose
2. Follow the naming conventions
3. Add TypeScript interfaces for props
4. Include proper documentation in component comments
5. Update this README if adding new categories 
