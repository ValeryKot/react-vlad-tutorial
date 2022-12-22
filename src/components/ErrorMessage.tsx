import React from 'react';

interface ErrorMessageProps {
  error: string;
}

export default function ErrorMessage({ error }: ErrorMessageProps) {
  return <p className="text-center text-red-700">{error}</p>;
}
