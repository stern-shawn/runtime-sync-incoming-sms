const AccessToken = Twilio.jwt.AccessToken;
const SyncGrant = AccessToken.SyncGrant;

exports.handler = (context, event, callback) => {
  // Create a Sync Grant for a particular Sync service, or use the default one
  const syncGrant = new SyncGrant({
    serviceSid: context.TWILIO_SYNC_SERVICE_SID || 'default',
  });

  // Create an access token which we will sign and return to the client,
  // containing the grant we just created
  // Use environment variables via `context` to keep your credentials secure
  const token = new AccessToken(
    context.ACCOUNT_SID,
    context.TWILIO_API_KEY,
    context.TWILIO_API_SECRET,
    { identity: 'demo' }
  );

  token.addGrant(syncGrant);

  // Return two pieces of information to the client: the name of the sync list
  // so it can be referenced later, and the JWT form of the access token
  const response = {
    syncListName: context.SYNC_LIST_NAME || 'serverless-sync-demo',
    token: token.toJwt(),
  };

  return callback(null, response);
};
