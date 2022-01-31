// Gatsby loader shim
global.___loader = {
  enqueue: jest.fn(),
}

// Environment variables
process.env.COGNITO_APP_CLIENT_ID = 'somereallylongvalue1111'
process.env.COGNITO_USER_POOL_ID = 'us-east_clientId'
