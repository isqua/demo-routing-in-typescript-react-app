import React from 'react';
import { getEvents, getPersons } from '../../store';
import { LinksList } from '../../components/LinksList';

export function MainPage(): React.ReactElement {
  const events = getEvents();
  const people = getPersons();

  const eventsItems = events.map((event) => ({
    id: event.id,
    text: event.title,
    href: `/events/${event.id}`,
  }));

  const personsItems = people.map((person) => ({
    id: person.username,
    text: `${person.name} ${person.surname}`,
    href: `/persons/${person.username}`,
  }));

  return (
    <>
      <LinksList
        title="Events"
        items={eventsItems}
      />
      <LinksList
        title="People"
        items={personsItems}
      />
    </>
  );
}
