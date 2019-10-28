import { JSONWebToken } from 'jolocom-lib/js/interactionTokens/JSONWebToken'
import { assembleRequestSummary } from './index'
import { CredentialOfferSummary } from './types'
import { CredentialOfferResponseAttrs } from 'jolocom-lib/js/interactionTokens/interactionTokens.types'
import { CredentialOfferRequest } from 'jolocom-lib/js/interactionTokens/credentialOfferRequest'
import { all, either, isEmpty, isNil } from 'ramda'

// TODO Return bool?
// const validateCredentialReceive = async (
//   credentialReceive: JSONWebToken<CredentialsReceive>,
// ) => {
//   const providedCredentials =
//     credentialReceive.interactionToken.signedCredentials
//
//   const validationResults = await JolocomLib.util.validateDigestables(
//     providedCredentials,
//   )
//
//   // TODO Error Code
//   if (validationResults.includes(false)) {
//     throw new Error('Invalid credentials received')
//   }
// }

/**
 * Given an credential receive JWT will return a {@link CredentialOfferSummary}
 * to be used by the {@link ReceiveConsentContainer}.
 * @param credential receive - the interaction token received from the counterparty
 * @param requester - a summary of the requester's identity
 * @returns a parsed credential receive summary
 */
export const credReceiveSummary = assembleRequestSummary

/**
 * Given an {@link CredentialOfferSummary}, generates the attributes ({@link CredentialOfferResponseAttrs})
 * that can be used to instantiate a valid {@link CredentialOfferResponse}
 * @param offerDetails - the offer received by the counterpary, as generated by {@link credentialOfferSummary}
 */

export const prepareCredentialOfferResponse = (
  offerDetails: CredentialOfferSummary,
): CredentialOfferResponseAttrs => {
  const { interactionToken } = offerDetails.request as JSONWebToken<
    CredentialOfferRequest
  >
  const { callbackURL } = interactionToken
  const selectedCredentialTypes = interactionToken.offeredTypes.map(type => ({
    type,
  }))

  // TODO Error CODE
  if (!areRequirementsEmpty(interactionToken)) {
    throw new Error('Input requests are not yet supported on the wallet')
  }

  return {
    callbackURL,
    selectedCredentials: selectedCredentialTypes,
  }
}

/**
 * Helper function checking if the credential offer contains any credentials
 * @todo Provide this from JolocomLib
 * @param interactionToken - {@link CredentialOfferRequest} issued by the counterparty
 */

const areRequirementsEmpty = (interactionToken: CredentialOfferRequest) => {
  const prerequisites = interactionToken.offeredTypes.map(
    interactionToken.getRequestedInputForType.bind(interactionToken),
  )

  return all(either(isNil, isEmpty), prerequisites)
}
