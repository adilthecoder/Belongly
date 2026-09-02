import type { Metadata } from 'next';
import './globals.css';
import './identity.css';
export const metadata: Metadata = {
  title:'Belongly — Your things. Remembered.',
  description:'Belongly remembers where you put things, who has them, and when they should come back. Private, local-first, and coming to Android.',
  openGraph:{title:'Belongly — Your things. Remembered.',description:'Know where your things are — whether they are at a place or with a person.',type:'website',images:[{url:'/og.png',width:1731,height:909,alt:'Belongly — Your things. Remembered.'}]},
  twitter:{card:'summary_large_image',title:'Belongly — Your things. Remembered.',description:'Know where your things are — whether they are at a place or with a person.',images:['/og.png']}
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
