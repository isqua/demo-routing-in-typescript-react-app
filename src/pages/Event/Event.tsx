import React from 'react';
import { useParams } from 'react-router-dom';
import { EventCard } from '../../components/EventCard';
import { LinksList } from '../../components/LinksList';
import { NotFoundError } from '../../components/NotFoundError';
import { getEvent, getParticipants } from '../../store';

export function EventPage(): React.ReactElement {
  const { eventId = '' } = useParams();
  const event = getEvent(eventId);
  const participants = getParticipants(eventId).map((person) => ({
    id: person.username,
    text: `${person.name} ${person.surname}`,
    href: `/events/${eventId}/participants/${person.username}`,
  }));

  if (!event) {
    return (
      <NotFoundError text={`Event with id “${eventId}” not found`} />
    );
  }

  return (
    <>
      <EventCard event={event} />
      <LinksList
        title="Participants"
        items={participants}
      />
    </>
  );
}
