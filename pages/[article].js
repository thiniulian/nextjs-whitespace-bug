export const getStaticPaths = () => {
  const paths = ["/page%20one"];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({ params: { article } }) => {
  return {
    props: {
      article,
      date: new Date().toISOString(),
    },
    revalidate: 1,
  };
};

const Page = ({ article, date }) => {
  return (
    <span>
      {article} {date}
    </span>
  );
};

export default Page;
