import * as React from 'react'
import NextHead from 'next/head'

export const Head = ({ children, title }) => (
  <React.Fragment>
    <NextHead>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>{title}</title>
      <meta
        name="description"
        content="Kevin Walker is a frontend engineer from Switzerland."
      ></meta>
      <link rel="shortcut icon" href="/favicon.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Karla:wght@400;600&display=swap"
        rel="stylesheet"
      />
      {children}
    </NextHead>
  </React.Fragment>
)

export default Head
