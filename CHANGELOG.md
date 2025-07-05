# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- PWA functionality with install prompt and offline support
- Global application configuration system
- Improved SEO structure with automatic title generation
- Component structure with organized directories (layout, ui, forms, product, common)
- TypeScript interfaces for better type safety
- ESLint and Prettier configuration with Tailwind CSS plugin
- Git Flow workflow with commit message conventions

### Changed
- Migrated to Tailwind CSS v4 with Vite plugin
- Restructured project to use `src/` directory
- Replaced `<img>` tags with `<NuxtImg>` components
- Updated ESLint configuration to allow self-closing void elements

### Fixed
- TypeScript errors and improved type safety
- Hydration mismatches in PWA components
- Component auto-import issues
- SEO meta tags implementation

### Technical
- Added `@vite-pwa/nuxt` for PWA support
- Configured service worker and manifest
- Implemented PWA install prompt component
- Added online/offline status indicator
- Created reusable UI components (BaseButton, BaseCard, etc.)
- Added loading and error state components

## [0.1.0] - 2024-01-XX

### Added
- Initial project setup with Nuxt 3
- Tailwind CSS v4 integration
- Basic page structure (Home, Products)
- Product listing and detail pages
- SSR support with API integration
- Basic responsive design

---

## Commit Message Conventions

This project follows Git Flow with specific commit prefixes:

- `[DEV]` - Development features and improvements
- `[HOTFIX]` - Critical bug fixes
- `[UPD]` - Updates and releases

### Examples:
- `[DEV] Add PWA functionality with install prompt`
- `[HOTFIX] Fix hydration mismatches in PWA components`
- `[UPD] Release version 1.0.0` 
