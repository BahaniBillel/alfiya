import Head from "next/head";
import React from "react";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import Link from "next/link";
import Image from "next/image";
import BannerImage from "../../images/screens2.png";
import Feature from "../../components/feature";

function Websites() {
  const pagelinks = [
    { id: 1, name: "eCommerce website", url: "#" },
    { id: 2, name: "Business website", url: "#" },
    { id: 3, name: "Blog website", url: "#" },
    { id: 4, name: "Portfolio website", url: "#" },
    { id: 5, name: "Event website", url: "#" },
    { id: 6, name: "Personal website", url: "#" },
    { id: 7, name: "Membership website", url: "#" },
    { id: 8, name: "Nonprofit website", url: "#" },
    { id: 9, name: "Informational website", url: "#" },
    { id: 10, name: "Online forum", url: "#" },
  ];

  const pagecontent = [
    {
      id: 1,
      name: "eCommerce website",
      banner: "../../images/screens2.png",
      developer: "Bahani Billel",
      title: "  Organisation unique educational.",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
      reprehenderit commodi cumque nulla debitis itaque, quibusdam id
      qui, modi quia tenetur enim cupiditate deleniti, aliquid esse!
      Explicabo optio odio molestiae eligendi? Dolorum quibusdam
      molestias quas ut repellendus. Porro, ratione. Fuga cupiditate
      ratione deleniti, dignissimos assumenda optio ea ab odio id quae`,
      externlink: "https://taaj-yz7p.vercel.app/",
      features: [
        {
          fid: 1,
          small: "SEO Implementation",
          feature: "The latest of SEO technlogie implemented in every webpage",
        },
        {
          fid: 2,
          small: "SEO Implementation",
          feature: "The latest of SEO technlogie implemented in every webpag",
        },
        {
          fid: 3,
          small: "SEO Implementation",
          feature: "The latest of SEO technlogie implemented in every webpag",
        },
      ],
    },
  ];

  const [display, setDisplay] = React.useState(false);
  const HandleProductDispaly = () => {
    setDisplay(true);
  };

  const [{ id, name, url }] = pagelinks;
  const contentIndex = pagecontent.find((page) => page.id == id);
  console.log(contentIndex);

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
              {pagelinks.map((plink) => (
                <li
                  className="plink"
                  key={plink.id}
                  onClick={HandleProductDispaly}
                >
                  <Link href={plink.url}>{plink.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* right side : banner and content */}

        <div className="col-span-10 lg:col-span-8 flex flex-col ">
          {/* banner */}
          <div className="relative  overflow-hidden border-b">
            <Image src={BannerImage} priority />
          </div>
          {/* content */}
          <div className="bg-white p-4 lg:p-10">
            {/* title and author */}
            <div className="flex flex-col space-y-4   justify-center ">
              <div className="flex flex-row space-x-10">
                <div className="flex flex-row flex-nowrap space-x-2 items-center">
                  <div className="h-8 w-8 rounded-full overflow-hidden relative border">
                    <Image src={BannerImage} priority fill />
                  </div>
                  <p className="text-xs">Developed by: BAHANI Billel</p>
                </div>
                <div className="flex flex-grow"></div>
                <Link
                  className="bg-black rounded-md py-1 font-light px-6 text-white"
                  href="https://taaj-yz7p.vercel.app/"
                  target="_blank"
                >
                  Visite
                </Link>
              </div>
              <h1 className="font-bold text-2xl w-3/4 lg:text-3xl tracking-wide ">
                Organisation unique educational.
              </h1>
            </div>
            {/* description of the offer */}
            <div>
              <p className="text-lg text-gray-800 py-3 tracking-wide leading-9 font-light ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                reprehenderit commodi cumque nulla debitis itaque, quibusdam id
                qui, modi quia tenetur enim cupiditate deleniti, aliquid esse!
                Explicabo optio odio molestiae eligendi? Dolorum quibusdam
                molestias quas ut repellendus. Porro, ratione. Fuga cupiditate
                ratione deleniti, dignissimos assumenda optio ea ab odio id quae
              </p>
            </div>

            {/* features */}

            <div className="px-10 flex flex-col  space-y-6 lg:flex-row lg:space-x-3 lg:space-y-0">
              <Feature />
              <Feature />
              <Feature />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Websites;
