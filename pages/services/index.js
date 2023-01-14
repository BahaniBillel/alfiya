import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Navigation from "../../components/navigation";

function Services() {
  const router = useRouter();
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

  const { sid } = router;
  return (
    <div>
      <Navigation />
      <div>
        <Link className="p-2 bg-red-200" href={`services/${sid}`}>
          websites
        </Link>
      </div>
    </div>
  );
}

export default Services;
