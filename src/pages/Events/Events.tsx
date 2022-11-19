import React from 'react';
import { getEvents } from '../../store';
import { LinksList } from '../../components/LinksList';

export function EventsPage(): React.ReactElement {
  const events = getEvents();

  const eventsItems = events.map((event) => ({
    id: event.id,
    text: event.title,
    href: `/events/${event.id}`,
  }));

  return (
    <LinksList title="Events" items={eventsItems} />
  );
}
