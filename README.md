# SGI E2E

## Overview

This repository contains the end-to-end (E2E) tests for the SGI project. These tests are designed to ensure the quality and functionality of the SGI system by simulating real user scenarios and interactions using Cypress.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/postos-graciosa-ti/sgi-e2e.git
   cd sgi-e2e
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Running Tests

To execute the E2E tests using Cypress, run the following command:
```bash
npm run cypress:open
```
This will open the Cypress Test Runner, where you can select and run individual test files.

Alternatively, to run the tests in headless mode, use:
```bash
npm run cypress:run
```

### Test Structure

- **cypress/integration/**: Contains all the test cases.
- **cypress/support/**: Support files and custom commands.
- **cypress/fixtures/**: Test data files.
