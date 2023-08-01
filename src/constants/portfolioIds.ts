import { mockUserDetails } from '../mockData/portfolioData';

export async function getPostIdList() {
  const idList = Array.from({ length: 10 }, (_, i) => (i + 1).toString());

  return idList.map((id) => ({
    params: {
      id,
    },
  }));
}

// lib/posts.js

export async function getPostDetails(postId: number) {
  const dataSet = [
    {
      title: 'Post 1',
      description: 'Lorem ipsum dolor sit amet...',
      date: 'Oct 10, 2022',
    },
    {
      title: 'Post 2',
      description: 'Lorem ipsum dolor sit amet...',
      date: 'Oct 20, 2022',
    },
    ...mockUserDetails,
  ];

  return dataSet[postId];
}
