import { Amplify, Auth } from 'aws-amplify'

const identityPoolId = process.env.GATSBY_IDENTITY_POOL_ID

// Authorization

Amplify.configure({
  API: {
    endpoints: [
      // Without this endpoint, specifically with custom header, analytics mysteriously stop working
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
