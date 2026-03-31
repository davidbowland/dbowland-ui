export const contact = {
  name: 'David Bowland',
  title: 'Manager, Engineering',
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
  bullets: string[]
}

export const jobs: Job[] = [
  {
    company: 'ProductPlan',
    companyUrl: 'https://www.productplan.com/',
    dates: 'Jul 2024 \u2013 Present',
    title: 'Manager, Engineering',
    bullets: [
      "Recruited by ownership to evaluate and strengthen the company's engineering practices",
      'Work across a Ruby on Rails and React monorepo, shipped continuously via daily deploys',
      'Lead a team spanning both feature development and platform work',
      'Built the foundational AI infrastructure for the product, including an in-app chat assistant and several internal Slack bots',
      'Mentor developers and manage two direct reports',
    ],
  },
  {
    company: 'TalentReef',
    companyUrl: 'https://www.talentreef.com/',
    dates: 'Apr 2021 \u2013 Jul 2024',
    title: 'Technical Lead',
    bullets: [
      'Led the highest-performing feature team \u2014 a distinction earned within six months of inheriting a formerly production support team',
      'Designed a new architecture built on Spring Boot in ECS, Node.js Lambdas, Postgres in RDS, and supporting AWS services',
      'Established engineering best practices and the procedures to enforce them',
      'Coached other team leads on effective leadership and value delivery',
      'Automated repetitive DevOps work with CloudFormation, Terraform, and shell scripting',
      'Organized two-week Agile sprints in Jira',
    ],
  },
  {
    company: 'Carfax',
    companyUrl: 'https://www.carfax.com/',
    dates: 'Mar 2020 \u2013 Apr 2021',
    title: 'Software Developer',
    bullets: [
      'Built Spring Boot and Spring Batch applications in Groovy and Java 8',
      'Built Node.js services with React frontends',
      'Deployed via Jenkins to Kubernetes on AWS or on-premise DC 3.0',
      'Promoted to acting team leader within ten months of joining',
    ],
  },
  {
    company: 'Boone County Government',
    companyUrl: 'https://www.showmeboone.com/',
    dates: 'Nov 2014 \u2013 Mar 2020',
    title: 'Senior Programmer Analyst',
    bullets: [
      'Built full-stack web applications with HTML, CSS, and JavaScript on ASP, ASP.NET, and Java backends',
      'Wrote COBOL and IBM CL applications on IBM System i',
      'Served as product manager for two major projects end-to-end',
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
    label: 'Languages \u2014 Proficient',
    gold: true,
    skills: ['TypeScript', 'Java', 'Groovy', 'JavaScript', 'Python'],
  },
  { label: 'Languages \u2014 Familiar', skills: ['Terraform', 'Ruby', 'ASP/ASP.NET', 'C++', 'PHP', 'COBOL'] },
  { label: 'SQL', skills: ['PostgreSQL', 'Microsoft SQL Server', 'DB2', 'MySQL', 'Oracle Database'] },
  { label: 'NoSQL', skills: ['DynamoDB'] },
  {
    label: 'Technologies',
    skills: ['Argo', 'CircleCI', 'Docker', 'Git', 'Kibana', 'Kubernetes', 'Jenkins', 'Jira', 'NewRelic', 'Splunk'],
  },
  {
    label: 'AWS',
    skills: [
      'Athena',
      'CloudFormation',
      'CloudWatch',
      'ECS',
      'Lambda',
      'QuickSight',
      'RDS',
      'S3',
      'SES',
      'SNS',
      'SQS',
      'Secrets Manager',
    ],
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
