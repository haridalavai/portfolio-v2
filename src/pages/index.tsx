import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Skills from '@/components/skills/Skills';
import SkillsSection from '@/components/skills';
import ProjectSection from '@/components/Projects';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className='container mx-auto max-w-5xl'>
      <Header />
      <Hero />
      <SkillsSection />
      <ProjectSection />
    </div>
  );
}
