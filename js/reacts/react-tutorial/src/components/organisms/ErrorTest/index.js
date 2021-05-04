import React from 'react';
import User from '../../atoms/User';
import ErrorBoundary from '../../atoms/ErrorBoundary';

export default function ErrorTest() {
  return (
    <ErrorBoundary>
      <User />
    </ErrorBoundary>
  );
}
