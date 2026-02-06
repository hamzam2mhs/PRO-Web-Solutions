// src/components/process/processData.js
import { MessageSquare, PenTool, Code2, Rocket } from 'lucide-react'

export const processSteps = [
  {
    step: 1,
    title: 'Free Consultation',
    description:
      'We learn about your business, goals, and what you want your website to achieve.',
    icon: MessageSquare,
  },
  {
    step: 2,
    title: 'Design & Structure',
    description:
      'We design a clean layout and structure your content for clarity and conversions.',
    icon: PenTool,
  },
  {
    step: 3,
    title: 'Build & Integrate',
    description:
      'We develop your website, connect forms, set up hosting, and optimize performance.',
    icon: Code2,
  },
  {
    step: 4,
    title: 'Launch & Support',
    description:
      'Your site goes live. We guide you through edits and next steps.',
    icon: Rocket,
  },
]
