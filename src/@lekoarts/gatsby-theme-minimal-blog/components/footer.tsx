/** @jsx jsx */
import { jsx, Link } from "theme-ui";
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata";

const Footer = () => {
  const { siteTitle } = useSiteMetadata();

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [6],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} by {siteTitle}.
      </div>
      <div>
        {`Built with `} 
        <Link
          aria-label="Link para a página do Gatsby"
          href="https://www.gatsbyjs.org/">
          Gatsby  
        </Link>
        {` / `}
        <Link
          aria-label="Link para o repositório no GitHub do tema"
          href="https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-minimal-blog"
        >
        Theme
        </Link>
        {` by `}
        <Link aria-label="Link para o site do autor do tema" href="https://www.lekoarts.de/en">
          LekoArts
        </Link>
        {` ❤️  `}
      </div>
    </footer>
  );
};

export default Footer;