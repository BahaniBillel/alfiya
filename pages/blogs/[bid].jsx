import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import Navigation from "../../components/navigation";
import Image from "next/image";
import Paragraph from "../../components/paragraph";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaFacebookSquare,
  FaHamburger,
} from "react-icons/fa";
import Link from "next/link";
import ArticleCard from "../../components/articlecard";
import Footer from "../../components/footer";
import Indicator from "../../components/indicators";
import SearchInput from "../../components/searchinput";

const data = [
  {
    id: 1,
    category: "Traveling",
    image: "https://picsum.photos/id/230/200/300",
    date: "December 22th,2022",
    title: "Astonishing Facts About The Greek Resorts",
    content:
      "You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion...",
  },
  {
    id: 2,
    category: "Traveling",
    image: "https://picsum.photos/id/229/200/300",
    date: "December 22th,2022",
    title: "Astonishing Facts About The Greek Resorts",
    content:
      "You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion...",
  },
  {
    id: 3,
    category: "Traveling",
    image: "https://picsum.photos/id/228/200/300",
    date: "December 22th,2022",
    title: "Astonishing Facts About The Greek Resorts",
    content:
      "You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion...",
  },
  {
    id: 4,
    category: "Traveling",
    // image: "https://picsum.photos/id/227/200/300",
    date: "December 22th,2022",
    title: "Astonishing Facts About The Greek Resorts",
    content:
      "You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion...",
  },
  {
    id: 5,
    category: "Traveling",
    image: "https://picsum.photos/id/225/200/300",
    date: "December 22th,2022",
    title: "Astonishing Facts About The Greek Resorts 50",
    content:
      "You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion...",
  },
  ,
  {
    id: 6,
    category: "Traveling",
    image: "https://picsum.photos/id/223/200/300",
    date: "December 22th,2022",
    title: "Astonishing Facts About The Greek Resorts 50",
    content:
      "You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion...",
  },

  {
    id: 7,
    category: "Traveling",
    image: "https://picsum.photos/id/221/200/300",
    date: "December 22th,2022",
    title: "Astonishing Facts About The Greek Resorts 50",
    content:
      "You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion...",
  },
  {
    id: 8,
    category: "Traveling",
    image: "https://picsum.photos/id/220/200/300",
    date: "December 22th,2022",
    title: "Astonishing Facts About The Greek Resorts 50",
    content:
      "You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion...",
  },
  {
    id: 9,
    category: "Traveling",
    // image: "https://picsum.photos/id/219/200/300",
    date: "December 22th,2022",
    title: "Astonishing Facts About The Greek Resorts 50",
    content:
      "You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion...",
  },
  {
    id: 10,
    category: "Traveling",
    image: "https://picsum.photos/id/218/199/300",
    date: "December 22th,2022",
    title: "Astonishing Facts About The Greek Resorts 50",
    content:
      "You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion...",
  },
];

function Blog({ page }) {
  const { posts } = page;
  const myRef = useRef();
  const [completion, setCompletion] = useState();

  useEffect(() => {
    const updateScrollCompletion = () => {
      const scrollProgress = window.scrollY;
      if (scrollProgress > 550) {
        setCompletion(`text-red-400`);

        // setCompletion(Number(scrollProgress).toFixed(2));
      }

      // console.log(scrollProgress);
    };

    window.addEventListener("scroll", updateScrollCompletion);
    return () => {
      window.addEventListener("scroll", updateScrollCompletion);
    };
  }, []);

  // search field
  const [searchenable, setSearchenable] = useState(false);
  const [show, setShow] = useState("hidden");
  const HandleSearchClick = () => {
    setSearchenable(true);
    setShow("flex ");
  };

  const handleXmark = () => {
    setShow("hidden");
  };

  return (
    <>
      <div className="pb-44 relative font-sans">
        {posts.map((post) => (
          <div className="" key={post.id}>
            {/* upper ribbon */}
            <div className="hidden bg-black  py-2 text-sm md:px-32 font-semibold text-white font-sans md:flex md:flex-row space-x-5 px-2">
              <p className="text-xs">
                Digital marketing blogs for startups and other fields
              </p>
              <div className="flex-grow"></div>
              <ul className="flex flex-row space-x-3">
                <li>Contact</li>
                <li>Privacy policy</li>
              </ul>
            </div>
            {/* navigation bar */}

            <Navigation search={HandleSearchClick} />

            {/* page content */}

            <div className="grid lg:grid-cols-4 mt-8 font-sans  lg:px-32">
              {/* left section */}
              <section className=" md:col-span-3 md:px-5 h-full md:border-r-2 border-solid border-black ">
                {/* title and date */}
                <div className="pl-4 md:pl-10 md:pr-32 py-5 flex flex-col space-y-3 ">
                  <p className="text-xs text-gray-700">
                    11 December 2021 / 12:54
                  </p>
                  <h2 className="text-3xl md:text-6xl leading-snug  ">
                    Our company in <br /> significant numbers
                  </h2>
                </div>

                {/* section Image */}
                <div className="relative h-80 my-3 overflow-hidden ">
                  <Image
                    src={post.image}
                    fill
                    priority
                    className="w-fit grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                    alt="na"
                  />
                  <span className="text-white bg-teal-400 rounded-sm text-sm p-2 z-20 absolute left-5 bottom-5">
                    {post.category}
                  </span>
                </div>

                {/* paragraphs */}

                <div className="px-10  flex flex-col space-y-10 ">
                  <p className=" text-lg font-light -mb-10">
                    By :
                    <span
                      className={`py-3 text-lg ${completion} font-semibold`}
                      ref={myRef}
                    >
                      {post.author}
                    </span>
                  </p>
                  {post.content.map((par) => (
                    <div className="flex flex-col space-y-5" key={par}>
                      <Paragraph
                        subtitle={par.subtitle1}
                        subcontent={par.subcontent1}
                        quotation={par.quote1}
                        owner={par.teller1}
                      />
                      <Paragraph
                        subtitle={par.subtitle2}
                        subcontent={par.subcontent2}
                        quotation={par.quote2}
                        owner={par.teller2}
                      />
                      <Paragraph
                        subtitle={par.subtitle3}
                        subcontent={par.subcontent3}
                        quotation={par.quote3}
                        owner={par.teller3}
                      />

                      {/* share links */}
                      <div className="flex flex-row my-44">
                        <div className="py-2 px-2 md:px-10 border border-border bg-white  hover:text-teal-400 transition-all duration-300 cursor-pointer text-sm flex flex-row  items-center justify-center">
                          <FaFacebookF className="mr-2" />
                          Share on facebook
                        </div>
                        <div className="py-2 px-2 md:px-10 border border-border bg-black text-white hover:text-teal-400 transition-all duration-300 cursor-pointer  text-sm flex flex-row space-x-5 items-center">
                          <FaTwitter className="mr-2" />
                          Share on twitter
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* right section */}
              <section className=" md:px-auto  md:col-span-1  md:pl-5 flex flex-col justify-center items-center md:items-start md:justify-start py-3 space-y-5  ">
                {/* <Indicator subtitles={data} /> */}

                <p className="text-lg font-semibold py-5 border-b-2 border-solid border-black w-full">
                  Recent post
                </p>
                <div className="md:grid md:grid-col-2 md:grid-flow-col lg:grid-flow-row">
                  {data
                    .filter((art) => art.id < 4)
                    .map((art) => (
                      <ArticleCard
                        key={art.id}
                        href={`blogs`}
                        category={art.category}
                        image={art.image}
                        date={art.date}
                        title={art.title}
                        content={art.content}
                      />
                    ))}
                </div>
              </section>
            </div>
          </div>
        ))}
        <SearchInput toggle={show} xmark={handleXmark} />
      </div>
      <Footer />
    </>
  );
}

export default Blog;

async function getData() {
  // Fetching data from firestore
  const querySnapshot = await getDocs(collection(db, "blogs"));
  const blogs = querySnapshot.docs.map((doc) => ({ ...doc.data() }));

  return blogs;
}

export async function getServerSideProps(context) {
  const blogs = await getData();
  const { params, req, res } = context;
  const id = params.id;
  const page = blogs.find((x) => x.title === id);
  if (!page) return { notFound: true };

  console.log(page);
  return {
    props: {
      page,
    },
  };
}
