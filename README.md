# Welcome to the Grid Dynamics JavaScript Internship repo

The purpose of this project is to create E2E Testing framework

## Overview

This mono repo includes `webapp`, containing the React app, `cypress` containing the Cypress scripts for end-to-end testing, `playwright` containing Playwright scripts for end-to-end testing.

## Prerequisites

For now, we can use whatever versions, but at the time of creating this repo, we used

- Node version: 14.17
- NPM version: 6.14.13
- Yarn version: berry (v3.1.0)

## Installing the project

```shell
yarn install
```

## Adding new dependencies to the project

```shell
yarn workspace <project_name> add <dependency_name>
yarn workspace <project_name> add -D <dependency_name>

# OR

cd <project_directory>
yarn add <dependency_name>
yarn add -D <dependency_name>
```

## Web application under test

We use Cypress real world web application purely for demonstration and educational purposes. Use this app to learn, experiment, tinker, and practice application testing with different test frameworks.

Make sure to qualify for the [Prerequisite](./webapp/README.md#Prerequisites).
Start Web application with [Run the app](./webapp/README.md#Run).  

## Cypress

**Cypress** is a Front end automation framework.

Extensive documentation can be found [here](https://docs.cypress.io/guides/overview/why-cypress)

### Execute Cypress tets

```shell
yarn cypress:test
```

## PlayWright

**PlayWright** is a Front end automation framework.

Extensive documentation can be found [here](https://playwright.dev/docs/intro)

### Execute PlayWright tets

```shell
yarn playwright:test
```