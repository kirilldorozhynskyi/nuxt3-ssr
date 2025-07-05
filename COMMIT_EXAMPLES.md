# Commit Message Examples

## Feature Commits [DEV]

```
[DEV] Add user authentication system
[DEV] Implement product search functionality
[DEV] Create responsive navigation component
[DEV] Add form validation for user registration
[DEV] Implement dark mode toggle
[DEV] Add unit tests for API service
[DEV] Create reusable button component
[DEV] Add loading states for async operations
[DEV] Implement error boundary component
[DEV] Add internationalization support
```

## Hotfix Commits [HOTFIX]

```
[HOTFIX] Fix critical security vulnerability in auth
[HOTFIX] Resolve API endpoint crash on product page
[HOTFIX] Fix login button not responding
[HOTFIX] Fix mobile navigation menu bug
[HOTFIX] Resolve image loading issue
[HOTFIX] Fix form submission error
[HOTFIX] Resolve CSS layout breaking on Safari
[HOTFIX] Fix data not loading on page refresh
[HOTFIX] Resolve console errors in production
[HOTFIX] Fix Docker container startup issue
```

## Release Commits [UPD]

```
[UPD] Release version 1.2.0
[UPD] Update dependencies and security patches
[UPD] Prepare release candidate for production
[UPD] Bump version to 1.1.5
[UPD] Update API endpoints for v2
[UPD] Migrate to new database schema
[UPD] Update deployment configuration
[UPD] Release hotfix 1.0.3
[UPD] Prepare beta release 2.0.0
[UPD] Update documentation for new features
```

## Git Flow Workflow

### Starting a Feature

```bash
git flow feature start user-auth
# Make changes and commit with [DEV] prefix
git add .
git commit -m "[DEV] Add user authentication system"
git flow feature finish user-auth
```

### Starting a Hotfix

```bash
git flow hotfix start critical-bug
# Make changes and commit with [HOTFIX] prefix
git add .
git commit -m "[HOTFIX] Fix critical security vulnerability"
git flow hotfix finish critical-bug
```

### Starting a Release

```bash
git flow release start 1.2.0
# Make changes and commit with [UPD] prefix
git add .
git commit -m "[UPD] Release version 1.2.0"
git flow release finish 1.2.0
```

## Best Practices

1. **Be descriptive** - Explain what and why, not how
2. **Use present tense** - "Add feature" not "Added feature"
3. **Keep it concise** - Under 50 characters for the subject
4. **Use imperative mood** - "Fix bug" not "Fixed bug"
5. **Reference issues** - Include ticket numbers if applicable

## Examples with Issue References

```
[DEV] Add user authentication system (#123)
[HOTFIX] Fix login button not working (#456)
[UPD] Release version 1.2.0 (#789)
```
