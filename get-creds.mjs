#!/usr/bin/env zx

$.verbose = false;

const accountSid = await question(
  `${chalk.cyan.underline.bold('What is your Twilio Account SID?:')} `
);
const apiKey = await question(
  `${chalk.cyan.underline.bold('What is your API Key SID?:')} `
);
const apiSecret = await question(
  `${chalk.cyan.underline.bold('What is your API Key Secret?:')} `
);

await $`printf "TWILIO_ACCOUNT_SID=${accountSid}\nTWILIO_API_KEY=${apiKey}\nTWILIO_API_SECRET=${apiSecret}\nTWILIO_SYNC_SERVICE_SID=\nSYNC_LIST_NAME=" >> .env`;
