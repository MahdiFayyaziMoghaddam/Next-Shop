import Button from "@/components/ui/Button/Button";
import Link from "@/components/ui/Link";
import React from "react";

function NotFound() {
  return (
    <div className="flex-center w-full grow">
      <div className="flex flex-col items-center justify-start">
        <h1 className="text-2xl font-semibold text-secondary">404 ERROR!</h1>
        <p className="text-center text-dark-gray text-sm mt-[1em]">
          This page not found; <br /> back to home and start again
        </p>
        <Link variant="text" href="/" className="mt-[2.5em]">
          <Button
            variant="primary"
            className="text-[0.8em] py-[0.6em] px-[1.5em]"
          >
            HOMEPAGE
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
