import { faker } from '@faker-js/faker';
import learn from '../assets/work/learn.svg';
import office from '../assets/work/office.svg';
import partime from '../assets/work/partime.svg';

const svgArray = [learn, office, partime, learn];

interface AdditionalLink {
  url: string;
  linktype: string;
}

interface Experience {
  year: number;
  type: string;
  role: string;
  date: string;
  achievement: string[];
  responsibility: string[];
  additionalLinks: AdditionalLink[];
}

interface Skill {
  skilltype: string;
  percentage: number;
}

interface Achievement {
  number: string;
  details: string;
  height: number;
}

interface Portfolio {
  header: string;
  description: string;
}

interface Contact {
  contactType: string;
  link: string;
}

type Location = {
  latitude: number;
  longitude: number;
  locationName: string;
};

interface UserDetails {
  name: string;
  role: string;
  about: string;
  experience: Record<number, Experience[]>;
  keyskills: Skill[];
  achievements: Achievement[];
  portfolio: Portfolio[];
  contact: Contact[];
  location: Location;
}

const generateExperience = (): Record<number, Experience[]> => {
  const years = Array.from({ length: 10 }, (_, i) => 2014 + i); // Array of years from 2014 to 2023
  const numElements = faker.number.int({ min: 3, max: years.length });
  const randomYears = Array.from({ length: numElements }, () =>
    faker.helpers.arrayElement(years)
  );

  const experience: Record<number, Experience[]> = {};

  randomYears.forEach((year) => {
    const experienceCount = faker.number.int({
      min: 2,
      max: randomYears.length,
    });
    const responsibilityCount = faker.number.int({
      min: 2,
      max: 10,
    });

    const pickImage = faker.number.int({
      min: 0,
      max: 3,
    });

    const yearStr = Number(year);
    experience[yearStr] = Array.from({ length: experienceCount }).map(() => ({
      year,
      type: faker.company.name(),
      role: faker.company.buzzNoun(),
      image:
        svgArray[
          faker.number.int({
            min: 0,
            max: 3,
          })
        ],
      date: `${faker.date.month()} ${year} - ${faker.date.month()} ${year + 1}`,
      achievement: [faker.lorem.lines({ min: 1, max: 3 })],
      responsibility: Array.from({ length: responsibilityCount }).map(() =>
        faker.lorem.lines({ min: 1, max: 5 })
      ),
      additionalLinks: [
        {
          url: faker.internet.url(),
          linktype: 'twitter',
        },
        {
          url: faker.internet.url(),
          linktype: 'facebook',
        },
        {
          url: faker.internet.url(),
          linktype: 'website',
        },
      ],
    }));
  });

  return experience;
};

const generateUserDetails = (): UserDetails => {
  const portfolioCount = faker.number.int({
    min: 2,
    max: 20,
  });

  const keySkillsCount = faker.number.int({
    min: 2,
    max: 10,
  });

  const achievementCount = faker.number.int({
    min: 3,
    max: 10,
  });

  return {
    name: faker.person.fullName(),
    role: faker.name.jobTitle(),
    about: faker.lorem.paragraph(),
    experience: generateExperience(),
    keyskills: Array.from({ length: keySkillsCount }).map(() => ({
      skilltype: faker.name.jobArea(),
      percentage: faker.number.int({ max: 100 }),
    })),
    achievements: Array.from({ length: portfolioCount }).map(() => ({
      number: `${faker.number.int(30)}`,
      details: faker.lorem.sentences(2),
      height: faker.number.int({ min: 2, max: 3 }),
    })),
    portfolio: Array.from({ length: portfolioCount }).map(() => ({
      header: `${faker.company.name()}`,
      description: faker.lorem.sentences(2),
    })),
    contact: [
      {
        contactType: 'Email',
        link: faker.internet.email(),
      },
      {
        contactType: 'LinkedIn',
        link: faker.internet.userName(),
      },
      {
        contactType: 'Address',
        link: faker.location.streetAddress({ useFullAddress: true }),
      },
      {
        contactType: 'Instagram',
        link: faker.internet.userName(),
      },
      {
        contactType: 'Phone',
        link: faker.phone.number(),
      },
    ],
    location: {
      latitude: faker.location.latitude({ max: 10, min: -10 }),
      longitude: faker.location.latitude({ max: 10, min: -10 }),
      locationName: faker.location.city(),
    },
  };
};

export const mockUserDetails: UserDetails[] = Array.from({ length: 10 }).map(
  () => generateUserDetails()
);

console.log(mockUserDetails);
