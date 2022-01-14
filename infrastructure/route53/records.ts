import * as aws from '@pulumi/aws'

import { cdn, redirectCdn } from '@cloudfront'
import { hostedZoneId } from '@vars'

// https://www.pulumi.com/registry/packages/aws/api-docs/route53/record/

export const bowlandLink = new aws.route53.Record('bowland-link', {
  aliases: [
    {
      evaluateTargetHealth: false,
      name: cdn.domainName,
      zoneId: cdn.hostedZoneId,
    },
  ],
  name: 'bowland.link',
  type: 'A',
  zoneId: hostedZoneId,
})

export const wwwBowlandLink = new aws.route53.Record('www-bowland-link', {
  aliases: [
    {
      evaluateTargetHealth: false,
      name: redirectCdn.domainName,
      zoneId: redirectCdn.hostedZoneId,
    },
  ],
  name: 'www.bowland.link',
  type: 'A',
  zoneId: hostedZoneId,
})
