export const enum ErrorCode {
  Unknown = 'Unknown',

  // actions/account/index
  CheckIdentityFailed = 'IDWallet',
  IdentityWalletFailed = 'IDWallet',
  SaveClaimFailed = 'SaveClaim',
  SaveExternalCredentialFailed = 'SaveExtCred',

  // actions/sso/authenticationRequest
  AuthenticationRequestFailed = 'AuthReq',
  AuthenticationResponseFailed = 'AuthResp',

  // actions/sso/paymentRequest
  PaymentRequestFailed = 'PayReq',
  PaymentResponseFailed = 'PayResp',

  // actions/sso/index
  CredentialOfferFailed = 'CredOffer',
  CredentialsReceiveFailed = 'CredsReceive',
  CredentialRequestFailed = 'CredRequest',
  CredentialResponseFailed = 'CredResponse',
  ParseJWTFailed = 'ParseJWT',

  // actions/registration
  RegistrationFailed = 'Registration',
}

// NOTE: these strings are localized, remember to update locale files
const errorMessages: { [key in ErrorCode]: string } = {
  [ErrorCode.Unknown]: 'Unknown Error',

  [ErrorCode.CheckIdentityFailed]: 'Unable to authenticate identity',
  [ErrorCode.IdentityWalletFailed]: 'Identity Wallet could not be created',
  [ErrorCode.SaveClaimFailed]: 'Could not save claim',
  [ErrorCode.SaveExternalCredentialFailed]: 'Could not save external credential',

  [ErrorCode.AuthenticationRequestFailed]: 'Authentication request failed',
  [ErrorCode.AuthenticationResponseFailed]: 'Authentication response failed',
  [ErrorCode.PaymentRequestFailed]: 'Payment request failed',
  [ErrorCode.PaymentResponseFailed]: 'Payment response failed',

  [ErrorCode.CredentialOfferFailed]: 'Credential offer failed',
  [ErrorCode.CredentialsReceiveFailed]: 'Could not receive credentials',
  [ErrorCode.CredentialRequestFailed]: 'Credential request failed',
  [ErrorCode.CredentialResponseFailed]: 'Credential response failed',
  [ErrorCode.ParseJWTFailed]: 'Could not parse JSONWebToken',

  [ErrorCode.RegistrationFailed]: 'Registration failed',
}

export class AppError extends Error {
  code: ErrorCode
  origError: any

  constructor(code = ErrorCode.Unknown, origError?: any) {
    super(errorMessages[code] || errorMessages[ErrorCode.Unknown])
    this.code = code
    this.origError = origError
  }
}
