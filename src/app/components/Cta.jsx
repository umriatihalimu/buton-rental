import Image from "next/image";

const Cta = () => {
  return (
    <section className="section   xl:pt-40 pt-20" id="contact">
      <div className="flex items-center justify-center flex-col text-center">
        <h1 className="text-[30px] font-bold text-primary">
          Download sekarang dan rasakan kemudahannya{" "}
        </h1>

        {/* btn */}
        <div className="flex gap-4">
          <button>
            <Image
              src={"/assets/icons/buttons/google-play.svg"}
              width={150}
              height={130}
              alt=""
            />
          </button>
          <button>
            <Image
              src={"/assets/icons/buttons/appstore.svg"}
              width={150}
              height={130}
              alt=""
            />
          </button>
        </div>

        {/* gambar mobile */}
        <Image
          src={"/assets/images/cta/phone.png"}
          width={230}
          height={400}
          alt=""
        />
      </div>
    </section>
  );
};

export default Cta;
