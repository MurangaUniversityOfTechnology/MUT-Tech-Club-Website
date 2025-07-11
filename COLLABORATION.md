# Collaboration Guidelines

Welcome to the MUT Tech Club collaboration guide! This document outlines how we work together as a community to build amazing projects and learn from each other.

## Getting Started

### For New Contributors
1. **Join our community channels** - Connect with other members
2. **Read our [Code of Conduct](CODE_OF_CONDUCT.md)** - Understand our community standards
3. **Pick a good first issue** - Look for issues labeled `good first issue`
4. **Ask questions** - Don't hesitate to reach out for help

### Development Setup
```bash
# Clone the repository
git clone https://github.com/MurangaUniversityOfTechnology/MUT-Tech-Club-Website.git
cd MUT-Tech-Club-Website

# Navigate to the project directory
cd tech-club-blog

# Install dependencies
npm install

# Start development server
npm run develop
```

## Contribution Workflow

### 1. Find an Issue
- Browse [open issues](https://github.com/MurangaUniversityOfTechnology/MUT-Tech-Club-Website/issues)
- Comment on the issue you'd like to work on
- Wait for assignment before starting work

### 2. Create a Branch
```bash
git checkout -b feature/issue-number-description
# Example: git checkout -b feature/17-add-code-of-conduct
```

### 3. Make Changes
- Follow our coding standards
- Write clear, descriptive commit messages
- Test your changes thoroughly

### 4. Submit a Pull Request
- Use our PR template
- Reference the issue you're addressing
- Provide a clear description of changes

## Coding Standards

### General Guidelines
- Write clean, readable code
- Add comments for complex logic
- Follow existing code style and patterns
- Use meaningful variable and function names

### Commit Messages
Follow the conventional commit format:
```
type(scope): description

Examples:
feat(blog): add new article component
fix(nav): resolve mobile menu issue
docs: update collaboration guidelines
```

### File Naming
- Use kebab-case for files: `collaboration-guide.md`
- Use PascalCase for React components: `ArticleCard.tsx`
- Use camelCase for JavaScript functions: `getUserData()`

## Project Structure

```
tech-club-blog/
├── config/          # Configuration files
├── database/        # Database migrations
├── public/          # Static assets
├── src/
│   ├── admin/       # Admin panel
│   └── api/         # API routes and controllers
└── types/           # TypeScript definitions
```

## Communication

### Where to Get Help
- **GitHub Issues** - For bugs and feature requests
- **Club Meetings** - Weekly discussions and planning
- **Discord/Slack** - Quick questions and casual chat
- **Email** - For formal communications

### Best Practices
- Be respectful and patient
- Share knowledge and resources
- Help others when you can
- Celebrate each other's successes

## Review Process

### For Contributors
- All PRs require at least one review
- Address feedback promptly and professionally
- Be open to suggestions and improvements

### For Reviewers
- Provide constructive feedback
- Focus on code quality and functionality
- Be encouraging, especially with new contributors
- Test changes when possible

## Project Roles

### Members
- Contribute code and documentation
- Participate in discussions
- Help with testing and feedback

### Maintainers
- Review and merge pull requests
- Triage issues and assign labels
- Guide project direction
- Mentor new contributors

### Club Leaders
- Set overall project vision
- Coordinate with university administration
- Organize events and workshops
- Represent the club externally

## Recognition

We believe in recognizing contributions:
- **Contributors** - Listed in project documentation
- **Top Contributors** - Featured on club website
- **Mentors** - Special recognition for helping others
- **Event Speakers** - Opportunities to present work

## Learning Resources

### For Beginners
- [Git/GitHub Tutorial](https://docs.github.com/en/get-started)
- [JavaScript/TypeScript Basics](https://www.typescriptlang.org/docs/)
- [React Documentation](https://react.dev/)

### For Advanced Contributors
- [Strapi Documentation](https://docs.strapi.io/)
- [Advanced Git Workflows](https://www.atlassian.com/git/tutorials/comparing-workflows)
- [Code Review Best Practices](https://google.github.io/eng-practices/review/)

## Questions?

If you have questions not covered in this guide:
- Check our [FAQ](https://github.com/MurangaUniversityOfTechnology/MUT-Tech-Club-Website/wiki/FAQ)
- Ask in our community channels
- Reach out to club leadership
- Create an issue for documentation improvements

---

**Happy coding!** 🚀  
*MUT Tech Club - Building the future of technology together*
