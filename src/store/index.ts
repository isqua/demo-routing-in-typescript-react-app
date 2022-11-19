import { events } from './events';
import { persons } from './persons';
import type {
  EventToDisplay, Person, PersonToDisplay, RealEvent,
} from './types';

function getPersonToDisplay(person: Person): PersonToDisplay {
  return {
    ...person,
    avatar: `/images/persons/${person.username}.jpg`,
  };
}

function getEventToDisplay(event: RealEvent): EventToDisplay {
  return {
    ...event,
    cover: `/images/events/${event.id}.jpg`,
  };
}

export function getPerson(username: string): PersonToDisplay | undefined {
  const person = persons.find((p) => p.username === username);

  if (!person) {
    return undefined;
  }

  return getPersonToDisplay(person);
}

function isPersonDefined<PersonToDisplay>(p: PersonToDisplay | undefined): p is PersonToDisplay {
  return p !== undefined;
}

export function getPersons(): PersonToDisplay[] {
  return persons.map(getPersonToDisplay);
}

export function getEvent(eventId: string): EventToDisplay | undefined {
  const event = events.find((e) => e.id === eventId);

  if (!event) {
    return undefined;
  }

  return getEventToDisplay(event);
}

export function getParticipants(eventId: string): PersonToDisplay[] {
  const event = events.find((e) => e.id === eventId);

  if (!event) {
    return [];
  }

  return event.participants
    .map((username) => getPerson(username))
    .filter<PersonToDisplay>(isPersonDefined);
}

export function getEvents(): EventToDisplay[] {
  return events.map(getEventToDisplay);
}

export function getPersonEvents(username: string): EventToDisplay[] {
  return events
    .filter((e) => e.participants.includes(username))
    .map(getEventToDisplay);
}

export function isParticipant(eventId: string, username: string): boolean {
  const event = events.find((e) => e.id === eventId);

  if (!event) {
    return false;
  }

  return event.participants.includes(username);
}
