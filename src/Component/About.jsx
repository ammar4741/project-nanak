// import image from "./image/nanak.webp";
const About = () => {
  return (
   <div id="about" className="bg-[#F5EBE0]">
     <div className="container mx-auto py- ">
      {/* carousel start  */}
      
     <div className="p-1">
      <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img
      src="/nanak6.webp"
      className="w-full" />
  </div>
  <div id="item2" className="carousel-item w-full">
    <img
      src="/nanak5.webp"
      className="w-full" />
  </div>
  <div id="item3" className="carousel-item w-full">
    <img
      src="/nanak3.webp"
      className="w-full" />
  </div>
  <div id="item4" className="carousel-item w-full">
    <img
      src="/nanak1.webp"
      className="w-full" />
  </div>
</div>
<div className="flex w-full justify-center gap-2 py-1">
  <a href="#item1" className="btn btn-xs">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a>
  <a href="#item4" className="btn btn-xs">4</a>
</div>
     </div>
      {/* carousel end */}
      <div  className="container mx-auto text-black pb-4">
        <div className="p-2 md:flex lg:flex justify-around items-center gap-6">
          <div className="text-xl">
            <h1 className="font-bold py-2">
              Bir Muktijuddha Advocate Jahangir Kabir Nanak
            </h1>
            <h2 className="font-semibold">Former Minister</h2>
            <h2 className="font-semibold md:py-2">
              Ministry of Textiles & Jute
            </h2>
            <h2 className="font-semibold mb-6">
              Goverment of The People's Republic of Bangladesh
            </h2>
            {/* button  */}
            <a
              href="https://en.wikipedia.org/wiki/Jahangir_Kabir_Nanak"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-400 shadow-lg shadow-gray-700 p-2 rounded-xl font-semibold"
            >
              Read More...
            </a>
          </div>
          <img
            className="h-96 w-full py-3 mt-6 rounded-4xl lg:h-[700px] lg:w-[650px]"
            src="/kabirnanak.webp"
            alt="jahangir kabir nanak"
          />
        </div>
        <p className="container mx-auto text-lg px-2">
          
          <span className="font-bold">Jahangir Kabir Nanak</span> (born 14
          January 1954) is a Bangladesh Awami League politician. He was a
          Minister of Textiles and Jute and a former Member of Parliament
          representing the Dhaka-13 constituency. Nanak is also a Presidium
          Member of the Awami League Central Committee. Previously, he served as
          the State Minister for Local Government, Rural Development and
          Co-operatives.{" "}
          <span className="hidden lg:block">
            <span className="text-xl font-bold">Early life:</span> <br />
            Nanak was born on 14 January 1954 in Kshirad Mukherjee Lane of North
            Alekanda in Barisal, East Bengal, Dominion of Pakistan.[1] His
            father, Maulvi Bazlur Rahman Serniabat, was an employee at the
            Barisal Collectorate Office. They belongs to the Bengali Muslim
            Serniabat family, who are direct descendants of Emperor Sher Shah
            Suri.[2][3] He has a bachelor's degree in art and law.[1]
          </span>
        </p>
      </div>
    </div>
   </div>
  );
};

export default About;
