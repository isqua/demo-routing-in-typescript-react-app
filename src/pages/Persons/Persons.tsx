import React from 'react';
import { LinksList } from '../../components/LinksList';
import { getPersons } from '../../store';

export function PersonsPage(): React.ReactElement {
  const persons = getPersons();

  const personsItems = persons.map((person) => ({
    id: person.username,
    text: `${person.name} ${person.surname}`,
    href: `/persons/${person.username}`,
  }));

  return (
    <LinksList title="People" items={personsItems} />
  );
}
