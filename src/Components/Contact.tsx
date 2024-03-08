import { BackgroundBeams } from "./Parallax UI/BackgroundBeams";

function Contact() {
  return (
    <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased border-t-2 border-brandPrimary">
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutralSilver to-brandPrimary text-center font-sans font-bold ">
          Zakažite Sastanak sa Našim Timom!
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-xxl mx-auto my-14 text-xl text-center relative z-10">
          Ne ustručavajte se da nas kontaktirate za bilo kakva pitanja,
          sugestije ili saradnju. Naš tim je ovde da vam pomogne i odgovori na
          sve vaše potrebe kako biste ostvarili svoje digitalne ciljeve.
          Jednostavno popunite obrazac sa vašim e-mailom ispod, i naš tim će vas
          kontaktirati kako bismo zakazali sastanak i razgovarali o vašim
          potrebama i ciljevima. Takođe, možete se javiti na broj +381
          631601002. Mi smo tu da vam pomognemo. Vaše zadovoljstvo je naš
          prioritet.
        </p>
        <input
          type="text"
          placeholder="monetizenp@gmail.com"
          className="rounded-lg border border-neutral-800 focus:border-white w-3/5 relative z-10 mt-4 bg-neutral-950 placeholder:text-neutral-700 text-neutralSilver block mx-auto"
        />
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default Contact;
