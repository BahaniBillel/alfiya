import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Navigation from "../../components/navigation";

function Services() {
  const router = useRouter();

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
