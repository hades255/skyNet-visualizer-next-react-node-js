type Experience = {
  year: number;
  type: string;
  role: string;
  date: string;
  achievement: string[];
  responsibility: string[];
  additionalLinks: {
    url: string;
    linktype: string;
  }[];
  image: string;
};

type Skill = {
  skilltype: string;
  percentage: number;
};

type Achievement = {
  number: string;
  details: string;
  height: number;
};

type Testimonial = {
  header: string;
  description: string;
};

type Contact = {
  contactType: string;
  link: string;
};

type Location = {
  latitude: number;
  longitude: number;
  locationName: string;
};

type UserDetails = {
  name: string;
  role: string;
  about: string;
  experience: Record<number, Experience[]>;
  keyskills: Skill[];
  achievements: Achievement[];
  portfolio: Testimonial[];
  contact: Contact[];
  location: Location;
};

const userDetails: UserDetails[] = [
  {
    name: 'STACY BEKKER',
    role: 'Saleswoman/Entrepreneur',
    about:
      'I’m a motivated and results-driven sales manager with 5+ years of experience leading high-performing teams. Proven track record of increasing sales and profitability through strategic planning and implementation of effective sales techniques.',
    experience: {
      2015: [
        {
          year: 2016,
          type: 'part-time',
          role: 'Data Analyst',
          date: '9 February - 2nd May',
          achievement: [],
          responsibility: [
            'he does a lot of great work herre ',
            'he works on the ui lorem',
          ],
          additionalLinks: [
            {
              url: 'https://www.twitter.com',
              linktype: 'twiter',
            },
          ],
          image: '/Images/cpsa.svg',
        },
        {
          year: 2016,
          type: 'vacation',
          role: 'Front end',
          date: '9 February - 2nd May',
          achievement: [
            'best front end developer during these period of vacation',
          ],
          responsibility: [],
          additionalLinks: [
            {
              url: 'https://www.twitter.com',
              linktype: 'twiter',
            },
          ],
          image: '/Images/microsoft.svg',
        },
        {
          year: 2016,
          type: 'Content Manager',
          role: 'sales manager',
          date: '9 February - 2nd May',
          achievement: [],
          responsibility: [],
          additionalLinks: [
            {
              url: 'https://www.twitter.com',
              linktype: 'twiter',
            },
          ],
          image: '/Images/stack.svg',
        },
      ],
      2016: [
        {
          year: 2016,
          type: 'part-time',
          role: 'Economics Teacher',
          date: '9 February - 2nd May',
          achievement: [],
          responsibility: [],
          additionalLinks: [
            {
              url: 'https://www.twitter.com',
              linktype: 'twiter',
            },
          ],
          image: '/Images/microsoft.svg',
        },
        {
          year: 2016,
          type: 'vacation',
          role: 'vacation guide',
          date: '9 February - 2nd May',
          achievement: [],
          responsibility: [],
          additionalLinks: [
            {
              url: 'https://www.twitter.com',
              linktype: 'twiter',
            },
          ],
          image: '/Images/cpsa.svg',
        },
        {
          year: 2016,
          type: 'Microsoft Sales-manager',
          role: 'sales manager',
          date: '9 February - 2nd May',
          achievement: [],
          responsibility: [],
          additionalLinks: [
            {
              url: 'https://www.twitter.com',
              linktype: 'twiter',
            },
          ],
          image: '/Images/stack.svg',
        },
      ],
      2018: [
        {
          year: 2016,
          type: 'part-time',
          role: 'Economics Teacher',
          date: '9 February - 2nd May',
          achievement: [],
          responsibility: [],
          additionalLinks: [
            {
              url: 'https://www.twitter.com',
              linktype: 'twiter',
            },
          ],
          image: '/Images/microsoft.svg',
        },
        {
          year: 2016,
          type: 'vacation',
          role: 'vacation guide',
          date: '9 February - 2nd May',
          achievement: [],
          responsibility: [],
          additionalLinks: [
            {
              url: 'https://www.twitter.com',
              linktype: 'twiter',
            },
          ],
          image: '/Images/cpsa.svg',
        },
        {
          year: 2016,
          type: 'Microsoft Sales-manager',
          role: 'sales manager',
          date: '9 February - 2nd May',
          achievement: [],
          responsibility: [],
          additionalLinks: [
            {
              url: 'https://www.twitter.com',
              linktype: 'twiter',
            },
          ],
          image: '/Images/microsoft.svg',
        },
      ],
    },
    keyskills: [
      {
        skilltype: 'Adaptability',
        percentage: 100,
      },
      {
        skilltype: 'Time Management',
        percentage: 85,
      },
      {
        skilltype: 'Communication',
        percentage: 33,
      },
      {
        skilltype: 'Analytical Thinking',
        percentage: 70,
      },
      {
        skilltype: 'Communication',
        percentage: 50,
      },
      {
        skilltype: 'Negotiation',
        percentage: 50,
      },
    ],
    achievements: [
      {
        number: '28',
        details: 'Sales management learns work with',
        height: 2,
      },
      {
        number: '34',
        details:
          'Successfully navigated market changes and adapted sales strategies to maintain sales growth.',
        height: 3,
      },
      {
        number: '4',
        details:
          'awards of recognition for outstanding sales performance or leadership',
        height: 2,
      },
      {
        number: '32',
        details: 'Sales management strategies deemed successful',
        height: 3,
      },
      {
        number: '22',
        details:
          'Successful launch of a new product or service, retailing in significant sales growth',
        height: 2,
      },
      {
        number: '26',
        details:
          'Established and maintained relationships with key clients, resulting in repeat business and increased sales.',
        height: 2,
      },
    ],
    portfolio: [
      {
        header: 'TESTIMONIAL FROM ADOBE',
        description:
          'Stacy is a brilliant and eccentric sales manager, I would have never accomplished so much in sales without her expertise',
      },
      {
        header: 'TESTIMONIAL FROM MICROSOFT',
        description:
          'Stacy is a brilliant and eccentric sales manager here at Microsoft. We are happy to have her',
      },
      {
        header: 'REFERENCE FROM ADOBE',
        description:
          'She’s a motivated and results-driven sales manager with 5+ years of experience leading high-performing teams.',
      },
      {
        header: 'REFERENCE FROM ADOBE',
        description:
          'She’s a motivated and results-driven sales manager with 5+ years of experience leading high-performing teams.',
      },
    ],
    contact: [
      {
        contactType: 'Email',
        link: 'stacybacker@gmail.com',
      },
      {
        contactType: 'LinkedIn',
        link: 'stacybaker23',
      },
      {
        contactType: 'Address',
        link: 'Terra rd 123 Avenue, llinos Chicago',
      },
      {
        contactType: 'Instagram',
        link: 'Terra112',
      },
      {
        contactType: 'Phone',
        link: '+1 645-234-777',
      },
    ],
    location: {
      latitude: 51.05,
      longitude: -0.09,
      locationName: 'Antigue',
    },
  },
];
export default userDetails;
