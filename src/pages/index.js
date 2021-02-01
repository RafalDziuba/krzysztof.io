import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

function IndexLink({ title, slug }) {
  return (
    <li>
      <Link to={slug} itemProp="url">
        <span itemProp="headline">{title}</span>
      </Link>
    </li>
  )
}

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="Strona główna" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
        <Bio />
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Strona główna" />

      <p>
        Heja! 👋
      </p>
      <p>
        Nazywam się Krzysztof Jendrzyca. Zawodowo jestem programistą, a po godzinach prowadzę stronę <a href="https://skutecznyprogramista.pl">skutecznyprogramista.pl</a>, gdzie dokumentuję swoją drogę w IT.
      </p>

      <p>
        Obecnie staram się zrozumieć jak budować rzeczy w internecie w nienachalny i transparentny sposób.
      </p>

      <p>
        Ta strona to moje miejsce do myślenia, <a href="https://www.swyx.io/learn-in-public/">uczenia się na głos</a> i skracania pętli feedbackowej. Znajdziesz tutaj moje obserwacje i notatki.
      </p>

      <blockquote>
        <p>
          An idea kept private is as good as one you never had. And a fact no one can reproduce is no fact at all. Making something public always means to write it down so it can be read. There is no such thing as a history of unwritten ideas.{' '}
          <a href="https://www.goodreads.com/book/show/34507927-how-to-take-smart-notes">~Sönke Ahrens</a>
        </p>
      </blockquote>

      <p>
        Jeśli coś, co tu przeczytasz, w jakiś sposób z Tobą zarezonuje, to podziel się tym z innymi i daj mi znać. Chętnie przyjmę konstruktywny feedback.
      </p>
      <p>
        Żeby pogadać złap mnie na <a href="https://instagram.com/kjendrzyca/">Instagramie</a> lub <a href="https://twitter.com/kjendrzyca/">Twitterze</a>.
      </p>

      <h3>Wybrane wpisy</h3>
      <ul>
        <IndexLink
          title="Second Brain"
          slug="second-brain"
        />
        <IndexLink
          title="Rób swoje"
          slug="rob-swoje"
        />
      </ul>

      <h3>Notatki z książek, artykułów i podcastów</h3>
      <ul>
        <IndexLink
          title="The Building a Second Brain Podcast"
          slug="basb-podcast"
        />
        <IndexLink
          title="How to Win Friends and Influence People"
          slug="how-to-win-friends-and-influence-people"
        />
        <IndexLink
          title="The Cook and the Chef: Musk’s Secret Sauce"
          slug="the-cook-and-the-chef"
        />
        <IndexLink
          title="Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future"
          slug="elon-musk-ashlee-vance"
        />
      </ul>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY-MM-DD")
          title
          description
        }
      }
    }
  }
`
