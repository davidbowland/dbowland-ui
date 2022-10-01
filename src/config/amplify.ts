import { Amplify, Auth } from 'aws-amplify'
import { Analytics } from '@aws-amplify/analytics'

const identityPoolId = process.env.GATSBY_IDENTITY_POOL_ID

// Authorization

Amplify.configure({
  API: {
    endpoints: [
      // Without this endpoint, spefically with custom header, analytics mysterously stop working
      {
        custom_header: async () => ({
          Authorization: `Bearer ${(await Auth.currentSession()).getIdToken().getJwtToken()}`,
        }),
        endpoint: undefined,
        name: undefined,
      },
    ],
  },
  Auth: {
    identityPoolId,
    mandatorySignIn: false,
    region: identityPoolId.split(':')[0],
  },
})

// Analytics

const appId = process.env.GATSBY_PINPOINT_ID

const analyticsConfig = {
  AWSPinpoint: {
    appId,
    region: 'us-east-1',
  },
}

Analytics.configure(analyticsConfig)

Analytics.autoTrack('session', {
  // REQUIRED, turn on/off the auto tracking
  enable: true,
})

Analytics.autoTrack('pageView', {
  // REQUIRED, turn on/off the auto tracking
  enable: true,
})

Analytics.autoTrack('event', {
  // REQUIRED, turn on/off the auto tracking
  enable: true,
})

Auth.configure(analyticsConfig)
