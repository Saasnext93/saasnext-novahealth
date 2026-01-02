
import React from 'react';

export interface Specialty {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Service {
  id: string;
  name: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}