// src/components/services/servicesData.js
import { Globe, Cloud, Cpu, Smartphone } from 'lucide-react'

import websiteImage from '@/assets/services/websites-webapps.png'
import cloudImage from '@/assets/services/aws-cloud.png'
import aiImage from '@/assets/services/automation.png'
import mobileImage from '@/assets/services/mobile.png'

export const services = [
  {
    id: 'websites',
    label: 'Web & Apps',
    title: 'Websites & Web Apps',
    description:
      'Modern, fast, conversion-focused websites and web applications.',
    points: [
      'Mobile-first & responsive',
      'SEO-ready structure',
      'Fast load times',
      'Clear call-to-actions',
    ],
    icon: Globe,
    gradient: 'from-blue-500 to-cyan-500',
    image: websiteImage,
  },
  {
    id: 'cloud',
    label: 'AWS Cloud',
    title: 'Cloud & Infrastructure',
    description:
      'Secure, scalable AWS infrastructure so your website stays fast, reliable, and online.',
    points: [
      'AWS hosting & deployment',
      'SSL, backups & monitoring',
      'Performance optimization',
      'Domain & DNS management',
    ],
    icon: Cloud,
    gradient: 'from-purple-500 to-pink-500',
    image: cloudImage,
  },
  {
    id: 'ai',
    label: 'AI & Automation',
    title: 'AI & Business Automation',
    description:
      'Automate repetitive work using AI, chatbots, and smart workflows.',
    points: [
      'AI chatbots & assistants',
      'Form → CRM → email automation',
      'Internal tools & dashboards',
      'Custom workflows for your business',
    ],
    icon: Cpu,
    gradient: 'from-emerald-500 to-green-500',
    image: aiImage,
  },
  {
    id: 'mobile',
    label: 'Mobile Apps',
    title: 'Mobile Applications',
    description:
      'Cross-platform iOS & Android apps connected to your website and backend.',
    points: [
      'React Native apps',
      'User authentication',
      'API integrations',
      'App store readiness',
    ],
    icon: Smartphone,
    gradient: 'from-orange-500 to-red-500',
    image: mobileImage,
  },
]
