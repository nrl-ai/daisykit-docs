import type { DocsThemeConfig} from 'nextra-theme-docs';
import { useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const logo = (
  <span>
    <img className='h-9 w-auto dark:hidden' src="/logo_with_text.svg"></img>
    <img className='h-9 w-auto hidden dark:block' src="/logo_with_text_light.svg"></img>
    <style jsx>{`
      span {
        padding: 0.5rem 0.5rem 0.5rem 0;
        mask-image: linear-gradient(
          60deg,
          black 25%,
          rgba(0, 0, 0, 0.2) 50%,
          black 75%
        );
        mask-size: 400%;
        mask-position: 0%;
      }
      span:hover {
        mask-position: 100%;
        transition: mask-position 1s ease, -webkit-mask-position 1s ease;
      }
    `}</style>
  </span>
)

const config: DocsThemeConfig = {
  project: {
    link: 'https://github.com/nrl-ai/daisykit'
  },
  docsRepositoryBase: 'https://github.com/nrl-ai/daisykit-docs',
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Daisykit'
      }
    }
  },
  logo,
  head: function useHead() {
    const { title } = useConfig()
    const { route } = useRouter()
    const socialCard =
      route === '/' || !title
        ? 'https://daisykit.nrl.ai/og.jpeg'
        : `https://daisykit.nrl.ai/api/og?title=${title}`

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="An easy AI toolkit with face mask detection, pose detection, background matting, barcode detection and more."
        />
        <meta
          name="og:description"
          content="An easy AI toolkit with face mask detection, pose detection, background matting, barcode detection and more."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="nextra.site" />
        <meta name="twitter:url" content="https://nextra.site" />
        <meta
          name="og:title"
          content={title ? title + ' – Nextra' : 'Nextra'}
        />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="Nextra" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: light)"
        />
      </>
    )
  },
  banner: {
    key: 'daisylab-to-nrl',
    text: (
      <a href="https://nrl.ai" target="_blank" rel="noreferrer">
        🎉 DaisyLab now has become Neural Research Lab (NRL) 🎉
      </a>
    )
  },
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 2,
    toggleButton: true,
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <div>
          <a
            className="flex items-center gap-1 text-current"
            target="_blank"
            rel="noopener noreferrer"
            title="Neural Research Lab Website"
            href="https://nrl.ai"
          >
            <span>Developed by </span>
            <b>Neural Research Lab (NRL.AI)</b>
          </a>
        </div>
        <p className="mt-6 text-xs">
          © {new Date().getFullYear()} The Daisykit Project.
        </p>
      </div>
    )
  }
}

export default config
