import Product from "@/components/Product";
import ToggleTheme from "@/components/ToggleTheme";
import Link from "@/components/ui/Link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center grow w-full">
        <div className="flex justify-between w-full mt-[4em] max-lg:mt-[3.5em] max-md:mt-[2.8em] max-sm:mt-[2em]">
          <h2 className="font-semibold text-secondary text-[2em] max-lg:text-[1.7em] max-md:text-[1.5em] max-sm:text-[1.2em]">
            Shop The Latest
          </h2>
          <Link
            variant="text"
            href="/shop"
            className="text-accent! text-[1.2em] max-lg:text-[1em] max-md:text-[0.8em] max-sm:text-[0.6em]"
          >
            View All
          </Link>
        </div>
        <div className="relative flex flex-wrap justify-center gap-8 mt-6">
          <Product
            imgSrc="./image/product1.png"
            title="Product1"
            price={12000}
          />
          <Product
            imgSrc="./image/product1.png"
            title="Product1"
            price={12000}
          />
          <Product
            imgSrc="./image/product1.png"
            title="Product1"
            price={12000}
          />
          <Product
            imgSrc="./image/product1.png"
            title="Product1"
            price={12000}
          />
          {/* <Product
            imgSrc="./image/product1.png"
            title="Product1"
            price={12000}
          />
          <Product
            imgSrc="./image/product1.png"
            title="Product1"
            price={12000}
          /> */}
        </div>
      </div>
    </>
  );
}
