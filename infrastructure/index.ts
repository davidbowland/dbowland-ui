import * as pulumi from '@pulumi/pulumi'

// Import Pulumi configuration
import './config'

// Import modules to create resources
import '@cloudfront'
import '@route53'
import '@s3'

// Output
import { cdn } from '@cloudfront'
import { bowlandLink } from '@route53'

export const cdnUrl = pulumi.interpolate`https://${cdn.domainName}`
export const url = pulumi.interpolate`https://${bowlandLink.fqdn}`
