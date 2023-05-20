'use client'

import React, {useState, useEffect} from "react";
import Image from "next/image";
import { useSpring, animated } from 'react-spring';
import { SiWhatsapp , SiLinkedin, SiGmail} from "react-icons/si";

import Ozay from "../assets/images/partners/ozay.png"
import Mukan from "../assets/images/partners/Mukan.jpg"
import Burak from "../assets/images/partners/Burak.jpeg"
import Olga from "../assets/images/partners/Olga.jpeg"
import Ousoma from "../assets/images/partners/Ousoma.jpeg"
import Ozan from "../assets/images/partners/Ozan.jpeg"
import Gokce from "../assets/images/partners/Gokce.jpeg"
import DevBurak from "../assets/images/partners/DevBurak.jpg"

const dataArr = [
  {
    name: 'Oussame Bouzid',
    imgAlt: "Atlantic Valley Oussame Bouzid",
    jobTitle: 'Ortak, Varşova',
    image: Ousoma,
    linkedinUrl: "https://www.linkedin.com/in/oussama-bouzid-a51818123/",
    bio: "Atlantic Valley'deki Kıdemli Ortak olarak görev yapmaktadır, bunun yanı sıra Amerikan finans şirketlerinde önemli deneyime sahip bir kişidir. Ayrıca Arapça, Fransızca ve İngilizce ana dilidir. Ek olarak, şu anda Atlantic Valley'de kurumsallaşma ve ortaklık işlemlerininde partner olarak görev yapmaktadır."
  }, 
  {
    name: 'Gökçe Bilir',
    imgAlt: "Atlantic Valley Gökçe Bilir",
    jobTitle: 'Ortak, İstanbul',
    image: Gokce,
    linkedinUrl: "https://www.linkedin.com/in/g%C3%B6k%C3%A7e-bilir-3397b6bb/",
    bio: "Gökçe Bilir, Atlantic Valley Partners'ın e-ticaret markaları için Operasyonel Süreç Yöneticiliği ve Takım Yöneticiliği yapmaktadır. Yılların deneyimiyle, ayrıntılara olan ilgisi ve işbirlikçi liderlik tarzıyla tanınan güvenilir bir liderdir. Katkıları, şirketin büyümesi ve genişlemesinde önemli bir rol oynamıştır."
  },
  {
    name: 'Ozan Sağlık',
    imgAlt: "Atlantic Valley Ozan Sağlık",
    jobTitle: 'Ortak, İstanbul',
    image: Ozan,
    linkedinUrl: "https://www.linkedin.com/in/ozansaglik/",
    bio: "Ozan Saglık, Atlantic Valley'de yatırım danışmanlağı partnerimizdir. İspanyolca, Türkçe ve İngilizce dillerinde akıcıdır ve şirket için önemli bir değerdir. Yatırım konusundaki uzmanlığı ve tecrübesi ile Atlantic Valley müşterilerinin risk analiz ve yatırım danışmanlık planlanlarını uzun süreli olarak yönetir."
  },
  {
    name: 'Olga Yermolkevich',
    imgAlt: "Atlantic Valley Olga Yermolkevich",
    jobTitle: 'Ortak, Varşova',
    image: Olga,
    linkedinUrl:'https://www.linkedin.com/in/burak-bilen-483772227/',
    bio:"Olga Yermolkevich, uluslararası gıda devlerinin yeni pazar yatırımlarını yönetme konusunda uzman. İtalyanca, Fransızca, Rusça, Lehçe ve İngilizce dillerine sahip aynı zamanda üretim optimizasyonu ve pazarlama stratejilerinde uzmanlığıyla Atlantic Valley Partners'ta bir ortak olarak büyümeyi sağlıyor."
  },
  {
    name: 'Burak Genç',
    imgAlt: "Atlantic Valley Burak Genç",
    jobTitle: 'Ortak, İstanbul',
    image: Burak,
    linkedinUrl:'https://www.linkedin.com/in/burak-bilen-483772227/',
    bio: "Burak Genç, inşaat ve proje tasarımı konusunda deneyimli bir uzmandır ve uluslararası yatırım ve satış yönetimi konularında geniş bir tecrübeye sahiptir. Atlantic Valley Partners'ın bir ortağı ve yatırım danışmanı olarak, bir çok müşterimiz ile Bulgaristan ve Balkan ülkelerinde birçok inşaat projesenin başarılı gerçekleştirilmesinde önemli roller oynamıştır."
  },
  {
    name: 'Mukan Olcayto',
    imgAlt: "Atlantic Valley Mukan Olcayto",
    jobTitle: 'Ortak, Varşova',
    image: Mukan,
    linkedinUrl: "https://www.linkedin.com/in/mukan-olcayto-a2b3811b0/",
    bio:"Mukan Olcayto, Atlantic Valley Partners'da yetenekli bir proje yöneticisidir ve e-ticaret istatistikleri konusunda uzmanlığa sahiptir. Birçok projeyi ve toplantıyı başarıyla yönetmiştir. Şirketlerin markalaşma ve Avrupa'da şirketleşmesinde proje kordinatörüdür. Aynı zamanda Atlantic Valley Dijital'in Grafik alanından sorumludur."
  },
  {
    name: 'Burak Bilen',
    imgAlt: "Atlantic Valley Burak Bilen",
    jobTitle: 'Ortak, Varşova',
    image: DevBurak,
    linkedinUrl: "https://www.linkedin.com/in/burak-bilen-483772227/",
    bio: "Burak Bilen, Atlantic Valley Partners'ta bir IT Proje Yöneticisidir ve çeşitli projeleri yönetmektedir. Yapay zeka ve yeni teknolojiler konusundaki güçlü uzmanlığıyla, şirketin dijital çözümlerine yenilik ve değer katmaktadır. Ayrıca, Burak, Atlantic Valley Digital'in IT operasyonlarından sorumludur."
  },
]

const PersonCard = ({ name, jobTitle, image, linkedinUrl, bio, imgAlt}) => {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full lg:h-2/3 w-full md:w-1/2 lg:w-1/3 mx-1 my-1 tracking-tighter transition-all duration-500 hover:shadow-2xl hover:text-blue-600 flex flex-col justify-center items-center">
      <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
        <div className="px-4 py-4 w-full">
          <div className="flex justify-center">
            <Image
              className="h-48 w-48 rounded-full object-cover shadow-md transition-all duration-300 hover:grayscale-0 grayscale"
              src={image}
              alt={imgAlt}
            />
          </div>
          <div className="text-center mt-4">
            <h2 className="text-3xl font-semibold tracking-tighter" id="section_font">{name}</h2>
            <p className="text-md text-gray-500 pt-2 font-semibold tracking-tighter" id="section_font">{jobTitle}</p>
            <center>
              <hr className=" mt-4 w-1/2 "/>
            </center>
            <p className="px-4 py-2 text-sm tracking-normal text-slate-500 md:text-base lg:text-sm xl:text-base overflow-hidden" id="section_font">
              {bio}
            </p>
          </div>
        </div>
      </a>
    </div>
    )
}

const CvTitle = () => {
    return (
        <div className=" shadow-lg block lg:mx-80 bg-white lg:px-12 md:px-8 sm:px-4 px-2 lg:pb-20 lg:pt-10" id="section_font">
            <div className="py-8 px-2">
              <h2 className=" text-4xl inline-block">Özay Yılmaz,</h2>
              <br />
              <br />
                Ben Ozay Yılmaz. Bodrum&apos;da doğdum. Eğitim hayatıma İstanbul&apos;da başladım ve Bahçeşehir Üniversitesi&apos;nde Avrupa Birliği İlişkileri alanında lisans eğitimi aldım. Lisans eğitimimden sonra uluslararası iş dünyasında kariyer yapmak istediğim için SGH University of Economy&apos;de Masterımı yaparken bir yandan da CEMS programını tamamladım.
                Mezuniyetimden sonra iş hayatına atıldım ve öncelikle Philip Morris International&apos;te çalıştım. Bu dünyanın en saygın finansal kuruluşlarından biri olan Philip Morris International&apos;te, Muhasebe Uzmanı olarak çalıştım ve uluslararası müşterilerle çalışarak finansal danışmanlık hizmetleri sundum.
                Daha sonra, JPMorgan Chase&apos;da Senyör Analist olarak çalışmaya başladım. Burada, şirketlerin ekonomik sorunlarına ve uygulamalırına yenilikçi çözümler geliştirerek ve uygulayarak, şirketin Analiz ve Uygulama faaliyetlerinde yer aldım.
                Ancak, uzun süreli iş hayatının ardından, iş dünyasında orta ölçekli firmaların karşılaştığı zorlukları ve ihtiyaçları gözlemledim. Bu ihtiyaçları karşılamak için, kendi şirketimi kurma kararı aldım ve Atlantic Valley & Partners&apos;ı hayata geçirdim. Şirketimiz, orta ölçekli işletmeler için özelleştirilmiş çözümler sunuyor ve şirketlerin büyümesine ve gelişmesine yardımcı oluyor.
                Bugün, Atlantic Valley & Partners&apos;ın başında olmaktan gurur duyuyorum ve şirketimizin müşterilerimize sunduğu değeri arttırmaya devam ediyorum.
            </div>
        </div>
    )
}

const Cv = ({ name, jobTitle, email,tel, linkedinUrl }) => {
    return (
      <figure className="bg-blue-950 shadow-lg p-6 md:p-10 lg:p-16 lg:flex lg:mx-80 lg:mt-16 items-center justify-center">
        <center>
          <Image src={Ozay} alt={`${name} Profile`} className="w-36 h-36 lg:w-32 lg:h-32 rounded-full object-cover" />
        </center>
        <div className="md:flex-grow sm:flex-grow block ml-4 py-4 text-center">
          <h2 className="lg:text-3xl md:text-2xl sm:text-xl text-2xl text-white font-bold mt-1" id="def">{name}</h2>
          <h3 className="lg:text-xl md:text-sm text-sm text-gray-200 pt-2" id="section_font">{jobTitle}</h3>
          <div className="mt-4 md:mt-1">
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-block mx-2">
              <button className="bg-transparent hover:bg-blue-700 text-white font-bold py-2 px-1 rounded">
                <SiLinkedin className="w-6 h-6" />
              </button>
            </a>
            <a href={`tel:${tel}`} className="inline-block mx-2">
              <button className="bg-transparent hover:bg-green-700 text-white font-bold py-2 px-1 rounded">
                <SiWhatsapp className="w-6 h-6" />
              </button>
            </a>
            <a href={`mailto:${email}`} className="inline-block mx-2">
              <button className="bg-transparent hover:bg-red-700 text-white font-bold py-2 px-1 rounded">
                <SiGmail className="w-6 h-6" />
              </button>
            </a>
          </div>
        </div>
      </figure>
      );
}

const Text = () => {
    return (
      <div className="w-full h-auto lg:mt-40 ">
        <div className="bg-white shadow-xl lg:mx-80 lg:pt-20 lg:pb-40 md:py-20 py-20 md:h-2/3 sm:h-2/3 h-auto lg:h-auto">
          <p className="block text-center pb-12 lg:text-5xl md:text-3xl sm:text-3xl text-2xl md:pt-8" id="def">
            ATLANTIC VALLEY PARTNERS
          </p>
          <h3 className="block lg:text-lg md:text-md px-5 lg:px-20 text-slate-600" id="section_font">
            Özel, kamu ve sosyal sektörlerdeki önde gelen kuruluşlarla çalışıyoruz. Ölçeğimiz, kapsamımız ve bilgimiz, başka hiç kimsenin çözemeyeceği sorunları çözmemize olanak tanır. Kapsamlı bir coğrafi erişimin yanı sıra derin, işlevsel sektör uzmanlığına sahibiz.Tutkumuz, müşterilerimizin zorluklarının ve Global anlamda önemli olan zorlukların üstesinden gelmek üzerine.
          </h3>
          <br />
          <br />
          <h2 className="block lg:text-lg md:text-md px-5 lg:px-20 text-slate-600" id="section_font">
            İş arkadaşlarımızla nasıl çalışıyorsak müşterilerimizle de aynı şekilde çalışıyoruz. Müşterilerimizin yani iş arkadaşlarımızın yeteneklerini ve liderlik becerilerini her seviyede ve her fırsatta geliştiriyoruz. Bunu iç destek sağlamak, gerçek sorunlara ulaşmak ve pratik önerilerle bu sorunlara çözüm üretmek için yapıyoruz. Müşterilerimizin sürece tam olarak katılma ve devam eden çalışmaya liderlik etme yeteneklerini ortaya çıkarıyoruz.
          </h2>
        </div>
        <Cv 
          name={'Özay Yılmaz'}
          jobTitle={'Founder of the Atlantic Valley'}
          email={'ozay@atlanticvalleypartners.com'}
          linkedinUrl={'https://www.linkedin.com/in/ozay-y%C4%B1lmaz-59814296/'}
          tel={'+48 731 384 284'}
        />
        <CvTitle />
      </div>
    )
}

const Cards = () => { 
 
    return (
      <div className="h-auto w-full bg-transparent">
        <center>
        <div className="text-center items-center lg:w-2/3 md:w-full sm:w-full justify-center flex h-16 py-16 mt-8 text-white bg-blue-950 border ">
          <h1 className="lg:text-3xl md:text-2xl text-2xl tracking-tight font-extralight text-slate-" id="section_font">-Partnerlerimiz-</h1>
        </div>
        </center>
        <div className=" lg:py-4 lg:px-4 md:py-4 md:px-4 lg:flex lg:flex-wrap md:flex md:flex-wrap sm:inline-block justify-center items-center text-center">   
            {dataArr.map((val, index) => {
                return <PersonCard key={index} {...val}/>
            })}
        </div>
      </div>
    )
}
export default function WhoWeAre() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    setIsImageLoaded(true);
  }, []);

  const animation = useSpring({
    from: { opacity: isImageLoaded ? 0 : 1},
    to: { opacity: 1 },
    config: { duration: 1000},
  });

  const highlightAnimation = useSpring({
    from: { opacity:  0.50},
    to: { opacity: isImageLoaded ? 0.8 : 0.5},
    config: { duration: 1000},
  });

  const TypingAnimation = ({ text, delay }) => {
    
    const springProps = useSpring({
      to: async (next) => {
        for (let i = 0; i < text.length; i++) {
          await next({ value: (text.substring(0, i  + 1))});
          await new Promise((resolve) => setTimeout(resolve, delay));
        }
      },
      from: { value: '' },
      config: { mass: 2, tension: 150, friction: 10 },
    });
  
    return <animated.span>{springProps.value}</animated.span>;
  };

  const animationSwipe = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000},
  });

  return (
    <animated.div className="bg-white bg-opacity-50" style={{animation, ...animationSwipe}}>
      {!isImageLoaded && (
        <div className="items-center justify-center h-screen w-full flex bg-transparent pb-40">
            <span className="loader lg:scale-1 md:scale-90 scale-75"></span>
        </div>
      )}
      <div
        id="whobg"
        className={`items-center justify-center h-screen w-full text-center flex`}>
        <div className="-mt-80">
          <h4 className="text-white lg:text-6xl md:text-4xl sm:text-2xl text-xl font-extralight" id="section_font">
            ATLANTIC VALLEY & PARTNERS 
          </h4>
          <div className="flex justify-center items-center text-center">
            <animated.div className={`${isImageLoaded ? 'w-1/2  my-2': 'w-full'} border border-black bg-black h-1 transform transition-all duration-1000 rounded-full `}></animated.div>
          </div>
          <animated.h3 className=" text-slate-600 bg-white lg:text-xl md:text-lg sm:text-md text-md text-center px-2 lg:py-4 md:py-2 sm:py-2 py-2 tracking-tighter rounded-full transform transition-all duration-200" id="section_font" style={highlightAnimation}>
            <TypingAnimation text={'Önde gelen işletmelerin, hükümetlerin ve kurumların güvenilir danışmanıyız.'} delay={30} />
            <p className=" inline-flex  text-2xl lg:px-1 justify-center text-center" id="fire">|</p>
          </animated.h3>
        </div>
        </div>
        <div className={`${isImageLoaded ? '' : 'hidden'}`}>
          <Text />
          <Cards />
        </div>
        </animated.div>
      )
      }