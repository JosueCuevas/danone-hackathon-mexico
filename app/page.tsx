import Header from "@components/header/Header";
import Link from "next/link";

const Home = async () => {
  // const logo = await getLogo();
  return (
    <>
      <Header logged={false} />
      <main className="bg-hero-pattern bg-no-repeat bg-cover bg-center min-h-screen min-w-screen relative">
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-heroMask px-8 flex flex-col justify-center items-center md:justify-end md:pb-20 md:items-start">
          <section className="container mx-auto">
            <article className="mb-12">
              <h1 className="text-4xl font-bold text-center text-lightBlue4 mb-6 ts-1 md:text-start">
                Keep track of your daily calorie limit!
              </h1>
              <p className="text-center text-lightBlue4 ts-1 md:text-start">
                Tell us your maximum daily calorie intake and we will recommend
                the products that best suit your goals!
              </p>
            </article>
            <article>
              <Link
                href="/daily-calorie-settings"
                className="bg-transparent text-lightBlue4 px-8 py-4 border border-lightBlue4 hover:border-vividCerulean hover:text-vividCerulean"
              >
                Start now
              </Link>
            </article>
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
