import { JSONWebToken } from 'jolocom-lib/js/interactionTokens/JSONWebToken'
import { InteractionType } from 'jolocom-lib/js/interactionTokens/types'
import {
  AssembledCredential,
  consumeCredentialRequest,
} from '../../actions/sso'
import { consumeAuthenticationRequest } from '../../actions/sso/authenticationRequest'
import { consumeCredentialOfferRequest } from '../../actions/sso/credentialOfferRequest'
import { Authentication } from 'jolocom-lib/js/interactionTokens/authentication'
import { CredentialOfferRequest } from 'jolocom-lib/js/interactionTokens/credentialOfferRequest'
import { CredentialRequest } from 'jolocom-lib/js/interactionTokens/credentialRequest'
import { PaymentRequest } from 'jolocom-lib/js/interactionTokens/paymentRequest'
import { formatPaymentRequest } from '../../actions/sso/paymentRequest'
import { IdentitySummary } from '../../actions/sso/types'
/**
 * @param Metadata should not need to be passed to credential receive because it comes from cred Offer
 * Furthermore, this only needs to be defined for requests
 */

export const interactionHandlers = {
  [InteractionType.Authentication]: <T extends JSONWebToken<Authentication>>(
    interactionToken: T,
    requesterSummary: IdentitySummary,
  ) => consumeAuthenticationRequest(interactionToken, requesterSummary),
  [InteractionType.CredentialRequest]: <
    T extends JSONWebToken<CredentialRequest>
  >(
    interactionToken: T,
    requesterSummary: IdentitySummary,
    assembledCredentials: AssembledCredential[],
  ) =>
    consumeCredentialRequest(
      interactionToken,
      requesterSummary,
      assembledCredentials,
    ),
  [InteractionType.CredentialOfferRequest]: <
    T extends JSONWebToken<CredentialOfferRequest>
  >(
    interactionToken: T,
    isDeepLinkInteraction: boolean,
  ) => consumeCredentialOfferRequest(interactionToken, isDeepLinkInteraction),
  [InteractionType.PaymentRequest]: <T extends JSONWebToken<PaymentRequest>>(
    interactionToken: T,
    requesterSummary: IdentitySummary,
  ) => formatPaymentRequest(interactionToken, requesterSummary),
}
