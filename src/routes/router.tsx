import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { PUBLIC_URL } from '../app/constants';

import { MainPage } from '../pages/Main';
import { PersonsPage } from '../pages/Persons';
import { PersonPage } from '../pages/Person';
import { EventsPage } from '../pages/Events';
import { EventPage } from '../pages/Event';
import { EventParticipantPage } from '../pages/EventParticipant';
import { ErrorPage } from '../pages/Error';
import { PageLayout } from '../components/PageLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/persons',
        element: <PersonsPage />,
      },
      {
        path: '/persons/:username',
        element: <PersonPage />,
      },
      {
        path: '/events',
        element: <EventsPage />,
      },
      {
        path: '/events/:eventId',
        element: <EventPage />,
      },
      {
        path: '/events/:eventId/participants/:username',
        element: <EventParticipantPage />,
      },
    ],
  },
], {
  basename: PUBLIC_URL,
});
