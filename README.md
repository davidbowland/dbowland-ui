# dbowland-ui

Next.js implementation of dbowland.com.

## Static Site

### Prerequisites

1. [Node](https://nodejs.org/en/)
1. [NPM](https://www.npmjs.com/)

### Local Development

The Next.js development server automatically rerenders in the browser when the source code changes. Start the local development server with:

```bash
npm run start
```

Alternatively, run a production build and serve that static content with:

```bash
npm run serve
```

Then view the server at <http://localhost:3000/>

### Unit Tests

[Jest](https://jestjs.io/) tests are run automatically on commit and push. If the test coverage threshold is not met, the push will fail. See `jest.config.ts` for coverage threshold.

Manually run tests with:

```bash
npm run test
```

### Prettier / Linter

Both [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) are executed on commit. Manually prettify and lint code with:

```bash
npm run lint
```

### Deploying to Production

Deploys run via GitHub Actions (`.github/workflows/pipeline.yaml`): a push builds and tests the site, deploys to the test environment, then promotes to production on `master`. AWS SAM manages the CloudFront/S3/Route53 infrastructure (`template.yaml`), and `scripts/copyToS3.sh` syncs the exported static site to the target bucket.

### Manual / Local Deploy

In extreme cases, the UI can be deployed directly with:

```bash
./scripts/deploy.sh
```

The `developer` role and [AWS SAM CLI](https://aws.amazon.com/serverless/sam/) are required to deploy this project. See `scripts/assumeDeveloperRole.sh` for local role assumption.

### Testing the Workflow

Use [act](https://github.com/nektos/act) to test the GitHub workflow locally. Install it with:

```bash
brew install act
```

Running it locally requires the same secrets used by `.github/workflows/pipeline.yaml` (AWS credentials, `GIT_EMAIL`, etc.) to be supplied via act's `-s`/`--secret-file` options.

## Additional Documentation

### Additional Next.js Documentation

- [Documentation](https://nextjs.org/docs)

- [Pages Router](https://nextjs.org/docs/pages)

- [Static Export](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports)

- [API Reference](https://nextjs.org/docs/pages/api-reference)

### Additional Workflow Documentation

- [Workflow Syntax for GitHub Actions](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions)

- [actions/setup-node](https://github.com/actions/setup-node)

- [actions/checkout](https://github.com/actions/checkout)
