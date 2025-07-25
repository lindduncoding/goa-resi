import React from 'react'

export default function Details(){
  return (
  <section id="#details" className="w-full px-4 md:px-12 lg:px-28 py-14 flex flex-col items-center gap-10">
    <div className="flex flex-col lg:flex-row justify-center items-start gap-8 w-full max-w-7xl">
      
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-green-800 text-3xl md:text-4xl lg:text-5xl font-semibold font-poppins text-left">
          Long Story Short
        </h2>
        <p className="text-black text-sm md:text-base font-normal font-poppins leading-relaxed text-justify">
          Selami pesona alam yang belum banyak dijamah di Goa Resi—gua alami dengan formasi batuan menakjubkan, udara sejuk, dan suasana tenang yang membawa kedamaian. Terletak di tengah alam yang asri, Goa Resi bukan hanya destinasi wisata, tapi pelarian sempurna dari hiruk-pikuk kota. Cocok untuk pecinta alam, petualang, maupun keluarga yang ingin menikmati pengalaman tak terlupakan.
          <br /><br />
          Selami pesona alam yang belum banyak dijamah di Goa Resi—gua alami dengan formasi batuan menakjubkan, udara sejuk, dan suasana tenang yang membawa kedamaian. Terletak di tengah alam yang asri, Goa Resi bukan hanya destinasi wisata, tapi pelarian sempurna dari hiruk-pikuk kota.
        </p>
      </div>
      <div className="w-96 h-96 relative rounded-[30px]">
          <img className="w-64 h-80 left-[173.10px] top-[56.18px] absolute rounded-[30px] shadow-lg border border-green-800" src="https://placehold.co/257x334" />
          <img className="w-64 h-80 left-0 top-0 absolute rounded-[30px] shadow-lg border border-green-800" src="https://placehold.co/257x334" />
      </div>
    </div>
  </section>
  )
}