import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;700;900&family=Source+Serif+Pro:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet" />
        </Head>
        <body className="bg-slate-100 font-sans antialiased">
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}


// export async function getStaticProps(context) {
//     return {
//       props: {
//         propertyName: process.env.VALUE_FROM_ENV,
//       },
//     }
//   }