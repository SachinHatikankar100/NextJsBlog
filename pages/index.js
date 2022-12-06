import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <p>
        Hello, I am Sachin. I am RPA developer who helps business by automating
        business processes and saving FTE counts that does manual work on a
        particular business process.
      </p>
      <p>
        I am a full-stack development enthusiast who likes to learn new tools
        and technologies to keep myself updated with the lastest tech trend.
      </p>
      <p>
        Feel free to explore the xamls and enhance your knowledge in UiPath. By
        blogging I wish to save your time and help you learn things quickly
        which will be helpful for the next technical feasibility which is on
        your way which you are dreading about. Don't worry I have got your back
        :)
      </p>
      <p>
        {" "}
        I also do open-source contributions. You can connect with me on{" "}
        <a href="https://twitter.com/shatikankan">Twitter</a>
      </p>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blogs</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
