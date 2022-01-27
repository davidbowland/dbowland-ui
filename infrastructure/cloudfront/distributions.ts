import * as aws from '@pulumi/aws'

import { acmCertificateArn, domainName, redirectStaticDomain, sourceS3Domain } from '@vars'

// https://www.pulumi.com/docs/reference/pkg/aws/cloudfront/distribution/

const errorCodePages = [400, 403, 404, 500]

export const cdn = new aws.cloudfront.Distribution('ui-cdn', {
  aliases: [domainName],
  customErrorResponses: errorCodePages.map((errorCode) => ({
    errorCachingMinTtl: 10,
    errorCode,
    responseCode: errorCode,
    responsePagePath: `/${errorCode}.html`,
  })),
  defaultCacheBehavior: {
    allowedMethods: ['GET', 'HEAD'],
    cachePolicyId: '658327ea-f89d-4fab-a63d-7e88639e58f6', // Managed-CachingOptimized
    cachedMethods: ['GET', 'HEAD'],
    compress: true,
    defaultTtl: 0,
    fieldLevelEncryptionId: '',
    functionAssociations: [],
    lambdaFunctionAssociations: [],
    maxTtl: 0,
    minTtl: 0,
    originRequestPolicyId: '',
    realtimeLogConfigArn: '',
    smoothStreaming: false,
    targetOriginId: sourceS3Domain,
    trustedKeyGroups: [],
    trustedSigners: [],
    viewerProtocolPolicy: 'redirect-to-https',
  },
  defaultRootObject: 'index.html',
  enabled: true,
  httpVersion: 'http2',
  isIpv6Enabled: true,
  origins: [
    {
      customHeaders: [],
      domainName: sourceS3Domain,
      originId: sourceS3Domain,
      originPath: '/dbowland-ui',
    },
  ],
  priceClass: 'PriceClass_100',
  restrictions: {
    geoRestriction: {
      locations: [],
      restrictionType: 'none',
    },
  },
  retainOnDelete: false,
  viewerCertificate: {
    acmCertificateArn,
    cloudfrontDefaultCertificate: false,
    iamCertificateId: '',
    minimumProtocolVersion: 'TLSv1.2_2018',
    sslSupportMethod: 'sni-only',
  },
  waitForDeployment: true,
})

export const redirectCdn = new aws.cloudfront.Distribution('redirect-cdn', {
  aliases: [`www.${domainName}`],
  defaultCacheBehavior: {
    allowedMethods: ['GET', 'HEAD'],
    cachePolicyId: '658327ea-f89d-4fab-a63d-7e88639e58f6', // Managed-CachingOptimized
    cachedMethods: ['GET', 'HEAD'],
    compress: true,
    defaultTtl: 0,
    fieldLevelEncryptionId: '',
    functionAssociations: [],
    lambdaFunctionAssociations: [],
    maxTtl: 0,
    minTtl: 0,
    originRequestPolicyId: '',
    realtimeLogConfigArn: '',
    smoothStreaming: false,
    targetOriginId: redirectStaticDomain,
    trustedKeyGroups: [],
    trustedSigners: [],
    viewerProtocolPolicy: 'allow-all',
  },
  enabled: true,
  httpVersion: 'http2',
  isIpv6Enabled: true,
  origins: [
    {
      connectionAttempts: 3,
      connectionTimeout: 10,
      customOriginConfig: {
        httpPort: 80,
        httpsPort: 443,
        originKeepaliveTimeout: 5,
        originProtocolPolicy: 'http-only',
        originReadTimeout: 30,
        originSslProtocols: ['TLSv1', 'TLSv1.1', 'TLSv1.2'],
      },
      domainName: redirectStaticDomain,
      originId: redirectStaticDomain,
    },
  ],
  priceClass: 'PriceClass_100',
  restrictions: {
    geoRestriction: {
      locations: [],
      restrictionType: 'none',
    },
  },
  retainOnDelete: false,
  viewerCertificate: {
    acmCertificateArn,
    cloudfrontDefaultCertificate: false,
    iamCertificateId: '',
    minimumProtocolVersion: 'TLSv1.2_2018',
    sslSupportMethod: 'sni-only',
  },
  waitForDeployment: true,
})
