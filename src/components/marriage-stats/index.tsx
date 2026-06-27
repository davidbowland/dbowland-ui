import React, { useEffect, useMemo, useState } from 'react'

import {
  MarriageDate,
  MarriageHeader,
  MarriagePageLayout,
  MarriageSeparator,
  MarriageSubtitle,
  MarriageTitle,
  SectionDivider,
  StorySection,
  StorySectionTitle,
  VideoCardWrapper,
  VideoGrid,
} from './elements'
import { ProgrammeSection } from './elements-programme'
import { calculateTimeSince, processMilestones, type MarriageStatsData, type MilestoneData } from './milestone-utils'

const MARRIAGE_DATE = '2025-09-20T17:00:00-05:00'
const PROPOSAL_VIDEO_ID = '1QjF6bZjeD2k4OKReS_Okm7xX0W_l9n52'
const WEDDING_VIDEO_ID = '1PMbL4GwiNlkN-aqjuun3ytOMTelFL-3w'

const SCRIPT = "'Pinyon Script', cursive"

const formatMarriageDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  })
}

export const MarriageStats = (): React.JSX.Element => {
  const [stats, setStats] = useState<MarriageStatsData | null>(null)

  useEffect(() => {
    setStats(calculateTimeSince(MARRIAGE_DATE))
    const timer = setInterval(() => {
      setStats(calculateTimeSince(MARRIAGE_DATE))
    }, 1_000)
    return () => clearInterval(timer)
  }, [])

  const milestoneData = useMemo<MilestoneData>(() => {
    if (!stats) return { achieved: [], next: null, upcoming: [] }
    return processMilestones(MARRIAGE_DATE)
  }, [stats])

  const formattedDate = useMemo(() => formatMarriageDate(MARRIAGE_DATE), [])

  return (
    <MarriagePageLayout>
      <MarriageHeader>
        <MarriageTitle>
          <span style={{ fontFamily: SCRIPT, fontWeight: 400, color: 'var(--romance-rose)' }}>
            David &amp; Tandi Bowland
          </span>
        </MarriageTitle>
        <MarriageSubtitle>Established</MarriageSubtitle>
        <MarriageDate>{formattedDate}</MarriageDate>
      </MarriageHeader>

      <SectionDivider />

      {stats && <ProgrammeSection milestoneData={milestoneData} stats={stats} />}

      <MarriageSeparator />

      <StorySection>
        <StorySectionTitle>Our Story</StorySectionTitle>
        <VideoGrid>
          <VideoCardWrapper title="The Proposal" videoId={PROPOSAL_VIDEO_ID} />
          <VideoCardWrapper title="The Wedding" videoId={WEDDING_VIDEO_ID} />
        </VideoGrid>
      </StorySection>
    </MarriagePageLayout>
  )
}

export default MarriageStats
