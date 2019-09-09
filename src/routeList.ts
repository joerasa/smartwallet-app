// NOTE: don't use 'const' so that values are useable in both .js and .ts files
export enum routeList {
  AppInit = 'AppInit',

  // Registration
  Landing = 'Landing',
  Entropy = 'Entropy',
  RegistrationProgress = 'RegistrationProgress',
  Loading = 'Loading',

  // Recovery
  InputSeedPhrase = 'InputSeedPhrase',
  CollectShards = 'CollectShards',

  // Bottom Nav Screens
  Home = 'Home',
  Claims = 'Claims',
  Documents = 'Documents',
  Records = 'Records',
  Settings = 'Settings',
  QRCodeScanner = 'QRCodeScanner',

  // Interactions & Details
  CredentialDialog = 'CredentialDialog',
  Consent = 'Consent',
  PaymentConsent = 'PaymentConsent',
  AuthenticationConsent = 'AuthenticationConsent',
  ClaimDetails = 'ClaimDetails',
  DocumentDetails = 'DocumentDetails',

  // Settings
  RepeatSeedPhrase = 'RepeatSeedPhrase',
  SeedPhrase = 'SeedPhrase',
  InitSocialRecovery = 'InitSocialRecovery',
  SocialRecovery = 'SocialRecovery',
  ReceivedShards = 'ReceivedShards',
  AcceptShard = 'AcceptShard',

  Exception = 'Exception',
}
