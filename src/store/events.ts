import { persons } from './persons';
import type { RealEvent } from './types';

export const events: RealEvent[] = [
  {
    id: 'jsconf',
    title: 'JavaScript Conf',
    participants: [
      persons[5].username,
      persons[4].username,
      persons[1].username,
    ],
  },
  {
    id: 'tsconf',
    title: 'TypeScript Conf',
    participants: [
      persons[3].username,
      persons[5].username,
      persons[0].username,
      persons[9].username,
      persons[4].username,
      persons[1].username,
      persons[8].username,
    ],
  },
  {
    id: 'nodeconf',
    title: 'Node.js Conf',
    participants: [
      persons[1].username,
      persons[9].username,
      persons[2].username,
      persons[6].username,
    ],
  },
  {
    id: 'reactconf',
    title: 'React Conf',
    participants: [
      persons[6].username,
      persons[9].username,
      persons[5].username,
      persons[2].username,
      persons[3].username,
      persons[7].username,
    ],
  },
  {
    id: 'uxconf',
    title: 'UX Conf',
    participants: [
      persons[2].username,
      persons[1].username,
      persons[8].username,
      persons[9].username,
    ],
  },
];
