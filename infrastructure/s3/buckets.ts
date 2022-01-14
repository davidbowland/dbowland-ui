import * as aws from '@pulumi/aws'

import { createdBy, createdFor, redirectToDomain } from '@vars'

// https://www.pulumi.com/registry/packages/aws/api-docs/s3/bucket/

export const redirectBucket = new aws.s3.Bucket('redirect-bucket', {
  acl: 'public-read',
  bucket: 'dbowland-ui-redirect',
  serverSideEncryptionConfiguration: {
    rule: {
      applyServerSideEncryptionByDefault: {
        sseAlgorithm: 'AES256',
      },
      bucketKeyEnabled: false,
    },
  },
  tags: {
    'created-by': createdBy,
    'created-for': createdFor,
  },
  website: {
    redirectAllRequestsTo: `https://${redirectToDomain}`,
  },
})
