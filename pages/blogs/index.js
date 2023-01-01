import React from "react";
import Navigation from "../../components/navigation";
import { ForwardIcon } from "@heroicons/react/24/solid";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import ArticleCard from "../../components/articlecard";
import Footer from "../../components/footer";

function LatestBlogs() {
  const data = [
    {
      id: 1,
      category: "fashion",
      image: "https://picsum.photos/id/230/200/300",
      date: "December 22th,2022",
      title: "Astonishing Facts About The Greek Resorts",
      content:
        "You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion...",
    },
    {
      id: 2,
      category: "fashion",
      image: "https://picsum.photos/id/229/200/300",
      date: "December 22th,2022",
      title: "Astonishing Facts About The Greek Resorts",
      content:
        "You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion...",
    },
    {
      id: 3,
      category: "fashion",
      image: "https://picsum.photos/id/228/200/300",
      date: "December 22th,2022",
      title: "Astonishing Facts About The Greek Resorts",
      content:
        "You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion...",
    },
    {
      id: 4,
      category: "fashion",
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
  return (
    <div>
      <Navigation />
      <div className="px-20 md:px-44">
        <div className="pl-96 border-b-2 border-solid border-black">
          <h1 className="mt-24 text-7xl font-sans font-semibold">
            Latest blogs
          </h1>
          <p className="text-xl font-light tracking-widest py-8 leading-8">
            In this section you will find all the latest articles added by our
            blog specialists. We invite you to read. Visit our website every day
            and it will certainly be a useful and pleasant time for you.
          </p>
        </div>
        {/* fashion */}
        <div className="py-5 flex flex-row">
          <div className="p-8 border-2 border-solid border-black w-80 h-64 flex flex-col justify-center space-y-8">
            <h1 className="font-semibold text-3xl">Fashion</h1>
            <p className="font-extralight">
              Posts related to the world's trends in Fashion style. Photo
              galleries and inspiration for photo sessions.
            </p>
            <div className="flex flex-row space-x-2 items-center text-xs font-bold mt-4 cursor-pointer">
              <p>Read more</p>
              <ForwardIcon className="h-4 text-gray-900 " />
            </div>
          </div>

          <div className="flex-1 flex flex-row">
            {data
              .filter((art) => art.category == "fashion" && art.id < 4)
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
        </div>

        {/* traveling */}

        <div className="py-5 flex flex-row border-t-2 border-solid border-black">
          <div className="p-8 border-2 border-solid border-black w-80 h-64 flex flex-col justify-center space-y-8">
            <h1 className="font-semibold text-3xl">Traveling</h1>
            <p className="font-extralight">
              Posts related to the world's trends in Fashion style. Photo
              galleries and inspiration for photo sessions.
            </p>
            <div className="flex flex-row space-x-2 items-center text-xs font-bold mt-4 cursor-pointer">
              <p>Read more</p>
              <ForwardIcon className="h-4 text-gray-900 " />
            </div>
          </div>

          <div className="flex-1 grid grid-flow-row grid-cols-2 gap-6">
            {data
              .filter((art) => art.category == "Traveling" && art.id < 8)
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
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default LatestBlogs;

async function getData() {
  // Fetching data from firestore
  const querySnapshot = await getDocs(collection(db, "blogs"));
  const blogs = querySnapshot.docs.map((doc) => ({ ...doc.data() }));

  return blogs;
}
