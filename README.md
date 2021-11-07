<h1 align="center"></h1>

<div align="center">
  <a href="http://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo_text.svg" width="150" alt="Nest Logo" />
  </a>
</div>

<h3 align="center">NestJS npm Library Template</h3>

<div align="center">
  <a href="https://nestjs.com" target="_blank">
    <img src="https://img.shields.io/badge/built%20with-NestJs-red.svg" alt="Built with NestJS">
  </a>
</div>

### Installation

1. Clone the repo
2. Run npm/yarn install

```bash
cd nestjs-library-template
npm install
```

# Publishing

In order to publish to NPM, create a user in npmjs.com. Follow [this guide](https://dev.to/nestjs/publishing-nestjs-packages-with-npm-21fm) for a more detailed explanation.

This repo includes a Github Action that will publish the package to npm on each push to `main`, where the version in the package.json has changed. In order for this to work you need to add your NPM_TOKEN to the repository secrets
More information [here](https://github.com/marketplace/actions/npm-publish).

## Change Log

See [Changelog](CHANGELOG.md) for more information.

## Contributing

Contributions welcome! See [Contributing](CONTRIBUTING.md).

## Author

Brian Zuker (https://twitter.com/Brian_Zuker))

## License

Licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# Shoutout
This repo was adapted from https://github.com/nestjsplus/nestjs-package-starter