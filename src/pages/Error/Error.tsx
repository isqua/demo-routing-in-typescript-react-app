import React from 'react';

import { NotFoundError } from '../../components/NotFoundError';

export function ErrorPage(): React.ReactElement {
  return (
    <NotFoundError text="Page not found" />
  );
}
