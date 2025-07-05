# Development Guidelines

## Code Standards

### Comments

- **All code comments must be written in English**
- Use clear, descriptive comments
- Comment complex logic and business rules
- Keep comments up-to-date with code changes

### Code Style

- Use consistent indentation (2 spaces)
- Follow Vue 3 Composition API patterns
- Use TypeScript for type safety
- Follow Nuxt 3 conventions

### File Naming

- Use kebab-case for file names
- Use PascalCase for component names
- Use camelCase for variables and functions

### Project Structure

```
sport.video-fe/
├── src/
│   ├── pages/           # Application pages
│   ├── components/      # Reusable components
│   ├── composables/     # Shared composables
│   ├── utils/          # Utility functions
│   ├── types/          # TypeScript type definitions
│   ├── config/         # Application configuration
│   └── styles/         # CSS and style files
├── public/             # Public files
├── CHANGELOG.md        # Project changelog
└── DEVELOPMENT_GUIDELINES.md
```

### Git Flow & Commit Messages

#### Branch Strategy

- Use **Git Flow** workflow
- `main` - production code
- `develop` - development branch
- `feature/*` - feature branches
- `hotfix/*` - hotfix branches
- `release/*` - release branches

#### Commit Message Format

Use prefixes based on branch type:

- **Feature branches**: `[DEV] description`

  ```
  [DEV] Add user authentication system
  [DEV] Implement product search functionality
  [DEV] Update UI components for mobile responsiveness
  ```

- **Hotfix branches**: `[HOTFIX] description`

  ```
  [HOTFIX] Fix critical security vulnerability
  [HOTFIX] Resolve API endpoint crash
  [HOTFIX] Fix login button not working
  ```

- **Release branches**: `[UPD] description`
  ```
  [UPD] Release version 1.2.0
  [UPD] Update dependencies and security patches
  [UPD] Prepare release candidate for production
  ```

#### Git Flow Commands

```bash
# Start new feature
git flow feature start feature-name

# Finish feature
git flow feature finish feature-name

# Start hotfix
git flow hotfix start hotfix-name

# Finish hotfix
git flow hotfix finish hotfix-name

# Start release
git flow release start release-name

# Finish release
git flow release finish release-name
```

### API Integration

- Use `$fetch` for API calls in Nuxt 3
- Handle errors gracefully
- Implement proper loading states

### Docker

- Use multi-stage builds for optimization
- Expose port 3000 internally
- Map to port 8000 externally: `docker run -p 8000:3000 video.sport`

## Development Workflow

1. **Feature Development**
   - Create feature branch from main
   - Write tests for new functionality
   - Update documentation and CHANGELOG.md

2. **Code Review**
   - Self-review before submitting PR
   - Ensure all comments are in English
   - Check for TypeScript errors

3. **Testing**
   - Test in development environment
   - Verify Docker build and run
   - Check responsive design

4. **Documentation**
   - Update CHANGELOG.md with new features/fixes
   - Follow [Keep a Changelog](https://keepachangelog.com/) format
   - Use English for all changelog entries

## Environment Setup

### Required Tools

- Node.js 20+
- Docker
- Git

### IDE Configuration

- Enable ESLint
- Enable TypeScript strict mode
- Use Prettier for formatting

## Performance Guidelines

- Optimize images and assets
- Use lazy loading for components
- Implement proper caching strategies
- Monitor bundle size

## Security

- Validate all user inputs
- Use HTTPS in production
- Keep dependencies updated
- Follow OWASP guidelines

---

**Remember**: All code comments must be in English for better maintainability and team
collaboration.
