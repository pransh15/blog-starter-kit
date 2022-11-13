import dynamic from 'next/dynamic'
import 'nextra-theme-blog/style.css'
import Head from 'next/head'

import '../styles/main.css'
import { useEffect } from 'react'

export default function Nextra({ Component, pageProps }) {
  useEffect(() => {
    const annotateThings = async () => {
      const { annotate, annotationGroup } = await import('rough-notation')

      const annotationGroupArgs = []
      const underlineElems = document.querySelector('#e1')
      const boxElems = document.querySelector('#e2')
      const circleElems = document.querySelector('#e3')

      if (underlineElems)
        annotationGroupArgs.push(
          annotate(underlineElems, { type: 'underline' })
        )
      if (boxElems) annotate(boxElems, { type: 'box' })
      if (circleElems) annotate(circleElems, { type: 'circle' })

      const ag = annotationGroup(annotationGroupArgs)
      ag.show()
      console.log("hello")
    }

    annotateThings()
  })

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
