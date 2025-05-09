# Flow API Generator

A standalone tool to generate TypeScript Angular client code from a Flow API Swagger endpoint.

## Prerequisites

- Node.js installed (version 14.x or higher recommended)
- Flow API server running at http://localhost:9453

## Setup

1. Install dependencies:

```bash
npm install
```

2. Make sure the Flow API server is running and accessible at http://localhost:9453.

## Usage

Run the API generator with:

```bash
npm run generate
```

This will:
1. Delete any existing `flow_api` directory
2. Generate a new Angular TypeScript client based on the Swagger definition
3. Output the generated code to the `flow_api` directory

## Configuration

The API generator uses the following settings:
- TypeScript Angular generator
- Angular version: 16.2.12
- Separate directories for models and API services
- API package name: api
- Model package name: model
- Aliases generated as models

To modify these settings, edit the `generate-flow-api.js` file. 
