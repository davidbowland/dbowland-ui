import * as aws from '@pulumi/aws'

import { cdn, redirectCdn } from '@cloudfront'
import { domainName } from '@vars'
import { zone } from './zones'

// https://www.pulumi.com/registry/packages/aws/api-docs/route53/record/

export const dbowlandCom = new aws.route53.Record('dbowland-com', {
  aliases: [
    {
      evaluateTargetHealth: false,
      name: cdn.domainName,
      zoneId: cdn.hostedZoneId,
    },
  ],
  name: domainName,
  type: 'A',
  zoneId: zone.then((zone) => zone.zoneId),
})

export const wwwDbowlandCom = new aws.route53.Record('www-dbowland-com', {
  aliases: [
    {
      evaluateTargetHealth: false,
      name: redirectCdn.domainName,
      zoneId: redirectCdn.hostedZoneId,
    },
  ],
  name: `www.${domainName}`,
  type: 'A',
  zoneId: zone.then((zone) => zone.zoneId),
})
