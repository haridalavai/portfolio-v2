import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import Header from '@/components/header';
import Hero from '@/components/hero';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className='md:container md:mx-auto'>
      <Header />
      <Hero />
    </div>
  );
}
