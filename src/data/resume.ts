export const contact = {
  name: 'David Bowland',
  title: 'Director of Engineering',
  email: 'david@dbowland.com',
  website: 'https://dbowland.com',
  phone: { display: '417.894.0079', href: 'tel:+14178940079' },
  location: 'Columbia, MO',
}

export const profile: string[] = [
  'Builds software and teams that hold up under real-world pressure',
  'Effective translator between geek and English',
  'Connoisseur of groan-inducing dad jokes',
]

export type Job = {
  company: string
  companyUrl: string
  dates: string
  title: string
  progression?: string[]
  bullets: string[]
}

export const jobs: Job[] = [
  {
    company: 'ProductPlan',
    companyUrl: 'https://www.productplan.com/',
    dates: 'Jul 2024 – Present',
    title: 'Director of Engineering',
    progression: ['Lead Engineer', 'Manager, Engineering', 'Director of Engineering'],
    bullets: [
      "Brought in directly by the board to evaluate and strengthen the company's engineering practices",
      'The first at ProductPlan to champion AI: led adoption across the product, customer service, and the engineering workflow before it was standard practice',
      'Built the foundational AI infrastructure — in-app chat assistant, customer service bots, and developer tooling — that became the baseline for subsequent AI work',
      'Leads teams spanning both feature development and platform work',
      'Ships continuously from a Ruby on Rails and React monorepo via daily deploys',
      'Elevates engineers across levels — junior to senior IC — through code review, architecture guidance, and one-on-ones',
    ],
  },
  {
    company: 'TalentReef',
    companyUrl: 'https://www.talentreef.com/',
    dates: 'Apr 2021 – Jul 2024',
    title: 'Technical Lead',
    progression: ['Senior Software Engineer', 'Technical Lead'],
    bullets: [
      'Led the highest-performing feature team — a distinction earned within six months of inheriting a formerly production support team',
      'Designed a cloud-native architecture on AWS (ECS, Lambda, RDS) to replace a legacy monolith',
      'Established engineering best practices and the processes to make them stick',
      'Coached other team leads on leading teams and shipping',
      'Automated repetitive DevOps work with CloudFormation, Terraform, and shell scripting',
    ],
  },
  {
    company: 'Carfax',
    companyUrl: 'https://www.carfax.com/',
    dates: 'Mar 2020 – Apr 2021',
    title: 'Software Developer',
    bullets: [
      'Built JVM-based backend services and data pipelines',
      'Built Node.js services with React frontends',
      'Deployed via Jenkins to Kubernetes on AWS or on-premise',
      'Promoted to acting team leader within ten months of joining',
    ],
  },
  {
    company: 'Boone County Government',
    companyUrl: 'https://www.showmeboone.com/',
    dates: 'Nov 2014 – Mar 2020',
    title: 'Senior Programmer Analyst',
    progression: ['Programmer Analyst', 'Senior Programmer Analyst'],
    bullets: [
      'Built full-stack web applications with HTML, CSS, and JavaScript on ASP, ASP.NET, and Java backends',
      'Wrote COBOL and IBM CL applications on IBM System i',
      'Owned product management for two major projects end-to-end',
      'Earned three merit-based raises outside the annual review cycle',
    ],
  },
]

export type SkillGroupData = {
  label: string
  gold?: boolean
  skills: string[]
}

export const skillGroups: SkillGroupData[] = [
  {
    label: 'Languages',
    gold: true,
    skills: ['TypeScript', 'JavaScript', 'Python', 'Java'],
  },
  { label: 'Background in', skills: ['Ruby', 'COBOL', 'Terraform'] },
  { label: 'SQL', skills: ['PostgreSQL', 'Microsoft SQL Server', 'DB2', 'MySQL'] },
  { label: 'NoSQL', skills: ['DynamoDB', 'Redis'] },
  {
    label: 'Technologies',
    skills: [
      'Argo',
      'CircleCI',
      'Docker',
      'Git',
      'GitHub Actions',
      'Kibana',
      'Kubernetes',
      'Jira',
      'NewRelic',
      'Splunk',
    ],
  },
  {
    label: 'AWS',
    skills: [
      'API Gateway',
      'Athena',
      'CloudFormation',
      'CloudFront',
      'CloudWatch',
      'Cognito',
      'ECS',
      'EventBridge',
      'Lambda',
      'Pinpoint',
      'QuickSight',
      'RDS',
      'Route 53',
      'S3',
      'SES',
      'SQS',
      'Secrets Manager',
      'Step Functions',
    ],
  },
  {
    label: 'AI — Applied',
    skills: ['Claude API', 'Amazon Bedrock', 'RAG', 'Prompt Engineering', 'Claude Code'],
  },
]

export type EducationEntry = {
  institution: string
  url: string
  location: string
  degree?: string
  gpa?: string
  major?: string
  minor?: string
  bullets?: string[]
}

export const education: EducationEntry[] = [
  {
    institution: 'Columbia College',
    url: 'https://ccis.edu/',
    location: 'Columbia, MO',
    degree: 'Bachelor of Science',
    gpa: '3.68',
    major: 'Computer Science',
    minor: 'Business',
    bullets: ['Graduated cum laude with a GPA of 3.68/4.0', 'Earned an A in all computer science classes'],
  },
  {
    institution: 'David H. Hickman High School',
    url: 'https://www.cpsk12.org/HHS',
    location: 'Columbia, MO',
  },
]
