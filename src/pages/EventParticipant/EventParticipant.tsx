import React from 'react';
import { useParams } from 'react-router-dom';

import { EventCard } from '../../components/EventCard';
import { NotFoundError } from '../../components/NotFoundError';
import { PersonCard } from '../../components/PersonCard';
import { getEvent, getPerson, isParticipant } from '../../store';

export function EventParticipantPage(): React.ReactElement {
  const { eventId = '', username = '' } = useParams();
  const person = getPerson(username);
  const event = getEvent(eventId);

  if (!event) {
    return <NotFoundError text={`Event with id “${eventId}” not found`} />;
  }

  if (!person) {
    return <NotFoundError text={`Person with login “${username}” not found`} />;
  }

  if (!isParticipant(eventId, username)) {
    return <NotFoundError text={`${person.name} ${person.surname} does not participate in “${event.title}”`} />;
  }

  return (
    <div>
      <EventCard event={event} />
      <PersonCard person={person} />
    </div>
  );
}
