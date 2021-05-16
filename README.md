# dbowland-gatsby

Gatsby implementation of dbowland.com.

## Static Site

### Prerequisites

1. [Node 16](https://nodejs.org/en/)
1. [NPM 7+](https://www.npmjs.com/)

### Local Development

The Gatsby development server automatically rerenders in the browser when the source code changes. Start the local development server with:

```bash
npm run start
```

Alternatively, run a production build and serve that static content with:

```bash
npm run serve
```

Then view the server at <http://localhost:3000/>

### Unit Tests

Jest tests are run automatically on commit and push. If the test coverage threshold is not met, the push will fail. See package.json for coverage threshold.

Manually run tests with:

```bash
npm run test
```

Snapshots can be updated with:

```bash
npm run test:update-snapshots
```

### Prettier / Linter

Both [prettier](https://prettier.io/) and [eslint](https://eslint.org/) are executed on commit. Manually prettify and lint code with:

```bash
npm run lint
```

### Deploying to Production

This project automatically deploys to production when a merge to `master` is made via a pull request.

## Workflow

In order to execute or test the workflow locally, the `DBOWLAND_SSH_USER`, `DBOWLAND_SSH_PASS`, and `GITHUB_TOKEN` environment variables must be defined. Use the [GitHub token page](https://github.com/settings/tokens) to generate a new token, if necessary.

### Manually Deploying

Code can be manually deployed to production using the deploy command and specifying the version part to change:

```bash
npm run deploy --type=[major/minor/patch]
```

The most common deploy should be:

```bash
npm run deploy --type=minor
```

This project uses [ssh2](https://www.npmjs.com/package/ssh2) and [sftp](https://github.com/mscdex/ssh2-streams/blob/master/SFTPStream.md#sftpstream-methods) to effect the deploy.

### Testing the Workflow

Use [act](https://github.com/nektos/act) to test the GitHub workflow. Install it with:

```bash
brew install act
```

Specify the secrets to use when executing:

```bash
npm run workflow
```

## Additional Documentation

### Additional Gastby Documentation

- [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

- [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

- [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

- [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

- [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

- [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

### Additional Workflow Documentation

- [Workflow Syntax for GitHub Actions](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions)

- [actions/setup_node](https://github.com/actions/setup-node)

- [actions/checkout](https://github.com/actions/checkout)

- [ad-m/github-push-action](https://github.com/ad-m/github-push-action)
