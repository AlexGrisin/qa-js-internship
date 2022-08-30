# Welcome to the Grid Dynamics JavaScript Internship repo

The purpose of this project is to create E2E Testing framework

## Overview

This mono repo includes `webapp`, containing the React app, `cypress` containing the Cypress scripts for end-to-end testing, `playwright` containing Playwright scripts for end-to-end testing.

## Prerequisites

For now, we can use whatever versions, but at the time of creating this repo, we used

- Node version: 14.17
- NPM version: 6.14.13
- Yarn version: 1.22.19

## Installing the project

```shell
yarn install
```

## Web application under test

We use Cypress [Real World Application](https://www.cypress.io/blog/2020/06/11/introducing-the-cypress-real-world-app/) purely for demonstration and educational purposes. Use this app to learn, experiment, tinker, and practice application testing with different test frameworks.

Make sure to qualify for the [Prerequisite](./webapp/README.md#Prerequisites).
Start Web application with [Run the app](./webapp/README.md#Run).

### Start Web application

```shell
yarn webapp:start
```

## Cypress

**Cypress** is a Front end automation framework.

Extensive documentation can be found [here](https://docs.cypress.io/guides/overview/why-cypress)

### Execute Cypress tets

```shell
yarn cypress-e2e:test
```

### Execute Cypress API tets

```shell
yarn cypress-e2e:test:api
```

## PlayWright

**PlayWright** is a Front end automation framework.

Extensive documentation can be found [here](https://playwright.dev/docs/intro)

### Execute PlayWright tets

```shell
yarn playwright-e2e:test
```

### Execute PlayWright API tets

```shell
yarn playwright-e2e:test:api
```

## Supertest

**SuperTest** is a module to provide a high-level abstraction for testing HTTP

Documentation can be found [here](https://github.com/visionmedia/supertest)

### Execute Supertest API tets

```shell
yarn supertest-api:test
```

## Tasks

In this section, you can find tasks we expect in your assignment from the **Automation Tests** standpoint:

- E2E Automation Tests: [Tasks](./tasks/end-to-end.md#Tasks)
- API Automation Tests: [Tasks](./tasks/api.md#Tasks)
