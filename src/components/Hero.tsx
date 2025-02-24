import plant from "../assets/plant-hero.png";
export const Hero = () => {
  return (
    <main className="my-20 px-8 xl:px-32 flex justify-center ">
      <div className="w-full xl:w-7xl flex justify-between p-20 h-[900px] lg:h-[600px] xl:h-[500px] absolute bg-[#C1DCDC] rounded-[24px] shadow-2xl shadow-neutral-500 ">
        <div>
          <h1 className="text-[48px] font-semibold">
            اشتري افضل الاسمدة <br /> والمخصبات الطبيعية{" "}
          </h1>
          <div className="my-10 flex gap-5 ">
            <div className="flex flex-col gap-1 ">
              <h2 className="text-5xl font-bold">30+</h2>
              <h3 className="text-neutral-600 text-3xl font-semibold">
                اسمدة ومخصبات لدينا
              </h3>
            </div>
            <div className="flex flex-col gap-1 ">
              <h2 className="text-5xl font-bold">100+</h2>
              <h3 className="text-neutral-700 text-3xl font-semibold">
                المشتريين{" "}
              </h3>
            </div>
          </div>
        </div>
        <img
          className="h-fit w-[600px] absolute bottom-0 right-0 md:right-20"
          src={plant}
          alt="plant pic"
        />
      </div>
    </main>
  );
};
