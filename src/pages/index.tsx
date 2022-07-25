type IndexPageProps = Record<string, any>;

const IndexPage: React.FC<IndexPageProps> = (props) => {
  return <>{props?.children}</>;
};

export default IndexPage;
