const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Path to the output directory
const outputDir = path.join(__dirname, 'api');

// Delete the existing directory if it exists
try {
  console.log(`Deleting directory: ${outputDir}`);
  if (fs.existsSync(outputDir)) {
    fs.rmSync(outputDir, { recursive: true, force: true });
    console.log('Directory successfully deleted');
  } else {
    console.log('Directory does not exist, no need to delete');
  }
} catch (error) {
  console.error(`Error deleting directory: ${error.message}`);
  process.exit(1);
}

// Generate the API
try {
  console.log('Generating Flow API using OpenAPI Generator...');

  const command = 'npx @openapitools/openapi-generator-cli generate ' +
    '-i http://localhost:9453/swagger/v1/swagger.json ' +
    '-g typescript-angular ' +
    '-o ./api ' +
    '--additional-properties=ngVersion=16.2.12 ' +
    '-p withSeparateModelsAndApi=true ' +
    '-p apiPackage=api ' +
    '-p modelPackage=model ' +
    '--generate-alias-as-model';

  console.log(`Executing command: ${command}`);
  execSync(command, { stdio: 'inherit' });
  console.log('API generation completed');
  console.log(`Output directory: ${outputDir}`);
} catch (error) {
  console.error(`Error generating API: ${error.message}`);
  console.log('Please ensure the API server is running at http://localhost:9453');
  process.exit(1);
}
