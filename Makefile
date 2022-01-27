bootstrap:
		npm install
		npm i -g zx
		chmod +x ./get-creds.mjs

server:
		./get-creds.mjs
		npm run start

cli:
		npm i -g twilio-cli
		twilio plugins:install @twilio-labs/plugin-serverless
