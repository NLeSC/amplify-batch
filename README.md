# Amplify batch

An Amazon Web Service powered application to run batch job from a React based web application.

## Architecture

The web application was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The web application uses [AWS AppSync](https://aws.amazon.com/appsync/) and [Amplify](https://aws-amplify.github.io/docs/) to setup and run infrastructure.

* Uses Graphql to communicate between web browser and server
* Uses AWS lambda to submit a AWS Batch job
* Uses AWS Batch job, written in Python, to run the job.
* Uses AWS ECR to store Docker image for AWS Batch
* Uses AWS DynamoDB for persisting data
* Uses AWS S3 for storing input/output data files
* Uses AWS Cognito for authentication
* Uses AWS S3 for deployment
* Uses AWS S3 for hosting
* Uses eu-central-1 aka frankfurt aws region
* Uses AWS lambda to cancel a AWS Batch job
* Uses AWS lambda to listen for a AWS Batch job state changes and store them in DynamoDB
* Allows AWS Batch job to read/write to S3 and DynamoDB
* Allows AWS lambda functions to read/write to S3 and DynamoDB

## Requirements

* yarn, NodeJS package manager
* Docker, used for building batch job Docker image
* aws cli (`pip install awscli`)
* amplify cli (`npm install -g @aws-amplify/cli`)
* AWS account

## Installation

Install web application dependencies with

```sh
yarn
```

## Setup infrastructure

```sh
amplify configure
```

To start when there are local amplify resources, but none in cloud with the amplify environment suffix.

```sh
amplify env add
# Asks for new environment name
```

To use current deployed amplify environment in the cloud

```sh
amplify env pull
```

See [Amplify documentation](https://aws-amplify.github.io/docs/cli-toolchain/quickstart#environments--teams) for more information about amplify environments.

## Web application scripts

To run app in development mode

```sh
yarn start
```

To run tests

```sh
yarn test
```

To build production

```sh
yarn build
```

## Deploy services

```sh
# Deploy backend
amplify push
# Deploy frontend
amplify publish
```

## Build Docker image

