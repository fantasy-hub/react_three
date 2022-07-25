type IndexPageProps = Record<string, any>;

const IndexPage: React.FC<IndexPageProps> = (props) => {
  const { children } = props;
  return <>{children}</>;
};

export default IndexPage;
