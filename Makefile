bootstrap:
		npm install
		npm i -g twilio-cli zx
		twilio plugins:install @twilio-labs/plugin-serverless
		chmod +x ./get-creds.mjs
		./get-creds.mjs
