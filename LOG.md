# Log

Log of amplify commands used to build up amplify batch application

Followed the https://aws-amplify.github.io/docs/js/react tutorial to setup basic app.

## Install deps

```sh
pip3 install awscli
sudo npm install -g @aws-amplify/cli
```

## Create React app

```sh
npx create-react-app amplify-batch --typescript
cd amplify-batch
yarn add typescript @types/node @types/react @types/react-dom @types/jest
```

## Init amplify

```sh
amplify init
? Enter a name for the project amplify-batch
? Enter a name for the environment master
? Choose your default editor: Visual Studio Code
? Choose the type of app that you're building javascript
? What javascript framework are you using react
? Source Directory Path:  src
? Distribution Directory Path: build
? Build Command:  yarn build
? Start Command: yarn start
```

## Dev publish web app

```bash
amplify add hosting
Select the environment setup: DEV (S3 only with HTTP)
hosting bucket name: amplify-batch-dev-hosting
index doc for the website: index.html
error doc for the website index.html
```

## Setup auth

Add auth to app with:

```bash
amplify add auth
 Do you want to use the default authentication and security configuration? Default configuration
 How do you want users to be able to sign in? Email
 Do you want to configure advanced settings? No, I am done.
```

## Storage for files

```bash
amplify add storage
? Please select from one of the below mentioned services: Content (Images, audio, video, etc.)
? Please provide a friendly name for your resource that will be used to label this category in the project: workspace
? Please provide bucket name: amplify-batch-workspace
? Who should have access: Auth users only
? What kind of access do you want for Authenticated users? create/update, read, delete
? Do you want to add a Lambda Trigger for your S3 Bucket? No
```

## Add GraphQL backend

```bash
amplify add api
? Please select from one of the below mentioned services: GraphQL
? Provide API name: amplifybatch
? Choose the default authorization type for the API Amazon Cognito User Pool
Use a Cognito user pool configured as a part of this project.
? Do you want to configure advanced settings for the GraphQL API No, I am done.
? Do you have an annotated GraphQL schema? Yes
? Provide your schema file path: ./schema.graphql
```

## Add job create/read to app

## Add Batch job definition

## Add submit function

## Add cancel function

## Add listen function

## Add Docker image

## Add job submission/cancel/listen to api

## Add job submission/cancel/listen to app

