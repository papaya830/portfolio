export type Role = {
  id: string;
  dates: string;
  role: string;
  company: string;
  oneLiner: string;
  results?: string[];
  tools?: string[];
  bullets: string[];
};

export const roles: Role[] = [
  {
    id: 'kardium',
    dates: 'Sep 2025 – May 2026',
    role: 'Software Developer Co-op',
    company: 'Kardium',
    oneLiner: 'Built a full-stack tool that replaced email-based document reviews.',
    results: ['10–15 h/week saved (est.)', '~$3K/yr licensing cut'],
    tools: ['C# / .NET · MudBlazor · SQL Server'],
    bullets: [
      'Built the review and workflow tool used by 30+ people across 5 teams.',
      'Gathered requirements with a key stakeholder to replace the manual process.',
      'Rebuilt a licensed ZPL label tool, producing byte-for-byte identical files.',
      "Took part in the Women's ERG and Early Career ERG.",
    ],
  },
  {
    id: 'stan',
    dates: 'Feb – Apr 2026',
    role: 'Fellow',
    company: 'Stan',
    oneLiner: "Built a LinkedIn presence using Stan's AI content tool.",
    results: ['200K+ impressions in 2 months'],
    tools: ['2 posts / week'],
    bullets: [
      "Posted twice a week with Stanley, Stan's AI content tool.",
      'Grew reach through consistent posting and engagement.',
    ],
  },
  {
    id: 'improving',
    dates: 'May – Dec 2024',
    role: 'Software Developer Co-op',
    company: 'Improving',
    oneLiner: "Shipped features and faster releases for AWS's open-source Valkey client.",
    results: ['40+ commands', 'CI 12h → 1h'],
    tools: ['Java · Python · Node.js · Go'],
    bullets: [
      'Implemented 40+ Valkey commands in GLIDE across four language clients.',
      'Automated Java releases with GitHub Actions.',
      'Wrote transaction tests for 22 JSON module commands.',
      'Started company-wide networking sessions for 35+ employees.',
      'Spoke on a company panel about being a woman in STEM.',
    ],
  },
  {
    id: 'volleyball-bc',
    dates: 'Oct 2021 – Feb 2024',
    role: 'Volleyball Coach',
    company: 'Volleyball BC',
    oneLiner: 'Coached beginner players aged 7–16.',
    tools: ['Ages 7–16'],
    bullets: [
      'Planned progressive practices, from fundamentals to game play.',
      'Gave individual feedback and built a supportive team culture.',
    ],
  },
  {
    id: 'elections-canada',
    dates: '2021 · 2025',
    role: 'Information & Registration Officer',
    company: 'Elections Canada',
    oneLiner: 'Ran voter registration and helped count ballots.',
    results: ['500+ ballots counted'],
    bullets: [
      'Verified voter ID and guided electors through registration and vouching.',
      'Set up the polling station and counted ballots on election night.',
    ],
  },
];
