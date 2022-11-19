import React from 'react';
import { useParams } from 'react-router-dom';
import { LinksList } from '../../components/LinksList';
import { NotFoundError } from '../../components/NotFoundError';
import { PersonCard } from '../../components/PersonCard';
import { getPerson, getPersonEvents } from '../../store';

export function PersonPage(): React.ReactElement {
  const { username = '' } = useParams();
  const person = getPerson(username);
  const events = getPersonEvents(username);
  const eventsItems = events.map((event) => ({
    id: event.id,
    text: event.title,
    href: `/events/${event.id}/participants/${username}`,
  }));

  if (!person) {
    return <NotFoundError text={`Person with login “${username}” not found`} />;
  }

  return (
    <>
      <PersonCard person={person} />
      <LinksList title="Participations" items={eventsItems} />
    </>
  );
}
