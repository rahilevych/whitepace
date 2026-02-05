export type Plan = {
  id: number;
  title: string;
  price: string;
  features: string[];
};
export const plansData: Plan[] = [
  {
    id: 1,
    title: 'Free',
    price: '$0',
    features: [
      'Capture ideas and find them quickly',
      'Sync unlimited devices',
      '10 GB monthly uploads',
      '200 MB max. note size',
      'Customize Home dashboard and access extra widgets',
      'Connect primary Google Calendar account',
      'Add due dates, reminders, and notifications to your tasks',
    ],
  },
  {
    id: 2,
    title: 'Personal',
    price: '$12',
    features: [
      'Everything in Free',
      'Unlimited storage',
      '500 MB max. note size',
      'Advanced search and filters',
      'Offline access',
      'Customize themes',
      'Priority support',
    ],
  },
  {
    id: 3,
    title: 'Organization',
    price: '$25',
    features: [
      'Everything in Personal',
      'Team collaboration',
      'Shared workspaces',
      'Admin dashboard',
      'User permissions',
      'Advanced security',
      'Dedicated support manager',
    ],
  },
];
