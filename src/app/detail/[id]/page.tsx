const DetailPage = ({ params }: { params: any }) => {
  return (
    <main>
      <h1>Hello, this is Detail {params?.id}</h1>
    </main>
  );
};

export default DetailPage;
