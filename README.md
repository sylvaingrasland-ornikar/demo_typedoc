# Insurance-Backend

## Description

This is the repository of the Ornikar Insurance backend API, using the [Nest](https://github.com/nestjs/nest) framework.

## Setup

### Dependencies

This project requires:

- Git-crypt (for secrets management in Git)
- NodeJS >=16.x (for Google AppEngine compatibility as of this writing)
- Yarn as Package Manager
- PostgreSQL 12.x (to match production)
- Redis 5.x

**1. Install Dependencies**

Before installing the JavaScript dependencies, you will need access to Ornikar's private NPM repository.
You need to get, from another developer or through Dashlane's secured notes, the NPM **authToken** and add it to a `.npmrc` file located inside the root directory.

Content of `.npmrc`:

```
//registry.npmjs.org/:_authToken=<TOKEN>
```

<ins>⚠️ The following assumes your are using macOS.</ins>

Install the dependencies for the following steps:

```sh
$ brew install node@16 yarn
$ yarn
```

**2. Environment Variables**

You need to create a `.env` file to store the environment variables, using:

```sh
$ cp .env.example .env
```

You'll need to edit this file and replace `POSTGRES_USER="postgres"` by `POSTGRES_USER="<user>"` where `<user>` is the output of the command `whoami` (ie. your username).

**3.a PostgreSQL with Brew Services**

You need to install and start PostgreSQL as a service using Brew.

```sh
$ brew install postgresql@12
$ brew services start postgresql@12
```

**3.b PostgreSQL & Redis with Docker**

You need to install and start PostgreSQL as a container using Docker.

**Note:** The username, password and database name are all handled by the .env file

```sh
# Create a virtual Docker network
$ docker network create nest

# Starts Redis and the DB
$ docker-compose up -d
```

**4. Initialize your database**

To initialize your database, you need to build and run the migrations using this command:

```sh
$ yarn build && yarn migration:run
```

If you want to start with a basic dataset, you can use the included seeds scripts to generate and insert some data.

```sh
$ yarn seed:run
```

If you want to clean your database, you can run.

```sh
$ yarn migration:drop
```

## Running the app

To run the app, you need to install the dependencies as shown above and run:

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# debug mode
$ yarn start:debug

# production mode
$ yarn start:prod
```

## Test

**Note:** In order to run the tests, you must clear your database and make sure you ran the latest migrations and run the seeds.

**Information:** End-to-end testing using upload via Google Cloud Storage requires a machine environment variable to work. (see: https://cloud.google.com/docs/authentication/getting-started#setting_the_environment_variable) The credentials can be found in Dashlane.

```bash
# Unit tests
$ yarn test

# Unit tests with Coverage
$ yarn test:cov

# Integration tests
$ yarn test:int

# End-to-End tests
$ yarn test:e2e
```

## Database Migrations

We use [TypeORM](https://typeorm.io/) to handle our migrations.

### Write a migration

First, you need to create a migration file with `yarn migration:create my_migration`. It will create a timestamp prefixed file in the `/apps/core-api/src/migrations` directory.
You can then define your migration in 2 methods, run & revert. **Run** is when you want to play your migration forward, **revert** when you're doing a rollback.
To define your migration, you can use these [helpers](https://typeorm.io/#/migrations/using-migration-api-to-write-migrations) from the lib.

### Run a migration

Once you've defined your migration, make sure to run it in various environments before running it in production.

You can now run one of the following commands:

- migration:run - runs all up migrations from the current state.
- migration:revert - runs a single down migration.

For example by doing:

    $ yarn migration:run

### How does it work ?

It creates a new table `migrations` in the postgre database that stores all the migrations already run.

### Run database seeds/fixtures

To make the setup faster, the project includes "seed" files, which generates a basic dataset for local development and CI tests.

Seeds can be run using this command:

    $ yarn seed:run

You can also create new seeds with this command:

    $ yarn seed:create

This will create a new empty file named "xxx-new_seed.ts", with the first part being the current timestamp, inside the folder `apps/core-api/src/seeds/`.

You can also reset your database using this command (it's useful if you want to replay the seed:run operation when doing some e2e tests):

    $ yarn seed:drop

You can follow the documentation of [typeorm-seeding](https://github.com/w3tecch/typeorm-seeding#-introduction) package to know how to make your own seed.

## Deploying

### Unlock secret environments

- Make sure you have git-crypt installed `brew install git-crypt`.
- Get the key from Google Drive or another dev.
- `git-crypt unlock /path/to/staging.key`

You should maintain production files locked unless you are using/editing them.
When you need to use or edit a .env.production\* file, you can.

- `git-crypt unlock /path/to/production.key`
- Edit and commit normally.
- `git-crypt lock -k production`

## Timeout

The API has a global timeout of 60 seconds so that client requests do not go unanswered.
You can redefine this timeout for a specific resource using the `@SetTimeout(ms: number)` decorator which can be applied to a method of controller.

## Scripts

- Update _Vehiculier_: See [Related README](./scripts/update_vehiculier/README.md)

## Dependencies

We are using _Renovate_ to update our dependencies. Please **pin** them in `package.json` if you are adding a new dependency via `yarn add [-D]...`
