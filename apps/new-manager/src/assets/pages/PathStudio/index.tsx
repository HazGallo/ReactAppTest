import React from 'react';
import LoadingPath from './components/LoadingPath';

export default function PathStudio() {
  const isLoading = true;

  if (isLoading) {
    return <LoadingPath />;
  }
  
  return <div>PathStudio</div>;
}
