export type Person = {
    username: string;
    name: string;
    surname: string;
    job: string;
}

export type PersonToDisplay = Person & {
    avatar: string;
};

export type RealEvent = {
    id: string;
    title: string;
    participants: string[];
}

export type EventToDisplay = Pick<RealEvent, 'id' | 'title'> & {
    cover: string;
}
