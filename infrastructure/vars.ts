/* General */

export const awsAccountId = process.env.AWS_ACCOUNT_ID
export const createdBy = 'dbowland-ui'
export const createdFor = 'dbowland.com'

/* CDN */

export const acmCertificateArn = `arn:aws:acm:us-east-1:${awsAccountId}:certificate/adce1a21-90b4-4120-8548-111215e582f0`
export const redirectStaticDomain = 'dbowland-ui-redirect.s3-website.us-east-2.amazonaws.com'
export const redirectToDomain = 'dbowland.com'
export const sourceS3Domain = 'dbowland-ui-source.s3.us-east-2.amazonaws.com'

/* Route 53 */

export const domainName = 'dbowland.com'
