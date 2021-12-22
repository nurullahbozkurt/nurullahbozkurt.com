import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="nurullahbozkurt.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Electrolize&family=Nunito:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="dark:relative dark:text-white dark:bg-darkTailwindBody dark:bg-bg dark:bg-contain  ">
        <div className="dark:absolute top-0 bottom-0 left-0 right-0 bg-gray-800 bg-opacity-50 z-[-1]"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
