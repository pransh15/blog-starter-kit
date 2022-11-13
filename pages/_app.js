import 'nextra-theme-blog/style.css'
import Head from 'next/head'

import '../styles/main.css'

import { annotate, annotationGroup } from 'rough-notation';

if(typeof document !== "undefined"){
  const a1 = annotate(document.querySelector('#e1'), { type: 'underline' });
  const a2 = annotate(document.querySelector('#e3'), { type: 'box' });
  const a3 = annotate(document.querySelector('#e3'), { type: 'circle' });
  
  const ag = annotationGroup([a3, a1, a2]);
  ag.show();
}

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <script async src="https://cdn.splitbee.io/sb.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
