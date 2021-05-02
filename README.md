# dbowland-gatsby

Gatsby implementation of dbowland.com.

## Prerequisites

1. [Node 16](https://nodejs.org/en/)
1. [NPM 7+](https://www.npmjs.com/)

## Local Development

Start the local development server with:

```bash
npm run start
```

Then view the server at <http://localhost:3000/>

## Unit Tests

Jest tests are run automatically on commit and push. If the test coverage threshold is not met, the push will fail. See package.json for coverage threshold.

Manually run tests with:

```bash
npm run test
```

## Prettier / Linter

Both [prettier](https://prettier.io/) and [eslint](https://eslint.org/) are executed on commit. Manually prettify and lint code with:

```bash
npm run lint
```

## Deploying to Production

To deploy to production, you must have `DBOWLAND_SSH_USER` and `DBOWLAND_SSH_PASS` environment variables defined. Execute the deploy with:

```bash
npm run deploy
```

Alternatively, build the project and manually copy the files from `public/` to production. Manually build the project with:

```bash
npm run build
```

This project uses [ssh2](https://www.npmjs.com/package/ssh2) and [sftp](https://github.com/mscdex/ssh2-streams/blob/master/SFTPStream.md#sftpstream-methods) to effect the deploy.

## Gastby Documentation

- [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

- [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

- [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

- [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

- [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

- [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)
