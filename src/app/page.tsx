'use client';

import React from 'react';

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background text-foreground font-body p-4 text-center">
      <h1 className="text-4xl font-bold tracking-tight">Starter Template</h1>
      <p className="text-muted-foreground mt-4 max-w-md">
        The project has been reset. You can now start building your new idea from scratch.
      </p>
      <div className="mt-8 flex gap-4">
        <button 
          className="bg-primary text-primary-foreground px-6 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors"
          onClick={() => console.log('Get started')}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
