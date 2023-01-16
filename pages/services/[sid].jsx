import React from "react";
import Head from "next/head";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import Navigation from "../../components/navigation";
import Me from "../../public/images/dotted2.png";
import Footer from "../../components/footer";
import Link from "next/link";
import Image from "next/image";
import BannerImage from "../../public/images/screens2.png";

import Feature from "../../components/feature";

function Slug({ page }) {
  const { websites } = page;
  console.log(websites);

  const [display, setDisplay] = React.useState(false);
  const HandleProductDispaly = () => {
    setDisplay(true);
  };
  return (
    <div>
      <Head>
        <title>Websites Development</title>
        <meta
          name="description"
          content="Find out a beautiful, well-designed websites for all purposes"
        />
      </Head>
      <Navigation />
      <div className="grid grid-cols-10 pb-20 font-sans">
        {/* left side */}
        <div className="hidden lg:block lg:col-span-2 bg-white px-5 border-r ">
          <div className="py-28">
            <h4 className="py-1 px-2 text-2xl font-bold bg-black text-white tracking-wide">
              My websites offer
            </h4>
            <ul className=" ">
              {websites.map((plink) => (
                <li
                  className="plink"
                  key={plink.id}
                  onClick={HandleProductDispaly}
                >
                  <Link href={plink.link}>{plink.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* right side : banner and content */}

        <div className="col-span-10 lg:col-span-8 flex flex-col ">
          {websites.map((web) => (
            <div key={web.id}>
              {/* banner */}
              <div className="relative  overflow-hidden border-b">
                <Image
                  src={web.banner}
                  width={1366}
                  height={600}
                  priority
                  alt="na"
                />
              </div>
              {/* content */}
              <div className="bg-white p-4 lg:p-10">
                {/* title and author */}
                <div className="flex flex-col space-y-4   justify-center ">
                  <div className="flex flex-row space-x-10">
                    <div className="flex flex-row flex-nowrap space-x-2 items-center">
                      <div className="h-8 w-8 rounded-full overflow-hidden relative border">
                        <Image src={Me} priority fill alt="bahani billel" />
                      </div>
                      <p className="text-xs">Developed by: {web.author}</p>
                    </div>
                    <div className="flex flex-grow"></div>
                    <Link
                      className="bg-black rounded-md py-1 font-light px-6 text-white"
                      href={web.link}
                      target="_blank"
                    >
                      Visite
                    </Link>
                  </div>
                  <h1 className="font-bold text-2xl w-3/4 lg:text-3xl tracking-wide ">
                    {web.title}
                  </h1>
                </div>
                {/* description of the offer */}
                <div>
                  <p className="text-lg text-gray-800 py-3 tracking-wide leading-9 font-light ">
                    {web.description}
                  </p>
                </div>

                {/* features */}

                <div className="px-10  grid grid-cols-3  space-y-6 lg:flex-row lg:space-x-3 lg:space-y-0">
                  {web.features.map((i) => {
                    return (
                      <Feature
                        feature={i.feature}
                        describe={i.featureDescription}
                        key={i.featureId}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Slug;

async function getData() {
  // Fetching data from firestore
  const querySnapshot = await getDocs(collection(db, "services"));
  const services = querySnapshot.docs.map((doc) => ({ ...doc.data() }));

  return services;
}

export async function getServerSideProps(context) {
  const services = await getData();
  const { params, req, res } = context;
  const id = params.id;
  const page = services.find((x) => x.title === id);
  if (!page) return { notFound: true };

  console.log(page);
  return {
    props: {
      page,
    },
  };
}
