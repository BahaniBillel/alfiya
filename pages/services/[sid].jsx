import React from "react";

function Slug() {
  return <div>Slug</div>;
}

export default Slug;

export async function getServerSideProps(context) {
  const { params } = context;

  console.log(params);
  return {
    props: {},
  };
}
