/* General */

export const awsAccountId = process.env.AWS_ACCOUNT_ID
export const createdBy = 'dbowland-ui'
export const createdFor = 'dbowland.com'

/* CDN */

export const acmCertificateArn = `arn:aws:acm:us-east-1:${awsAccountId}:certificate/6a48cba7-feb9-4de5-8cbf-d383140fcdef`
export const redirectStaticDomain = 'dbowland-ui-redirect.s3-website.us-east-2.amazonaws.com'
export const redirectToDomain = 'bowland.link'
export const sourceS3Domain = 'dbowland-ui-source.s3.us-east-2.amazonaws.com'

/* Route 53 */

export const domainName = 'bowland.link'