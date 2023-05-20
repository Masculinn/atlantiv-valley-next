'use client'

import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import {useSpring, animated} from "react-spring";

const malText = [
  {
    id: 0,
    imgSrc: "https://i.postimg.cc/SR30XKD6/resim-20-edited.png",
    text: "İş Seyehati",
  },
  {
    id: 1,
    imgSrc: "https://i.postimg.cc/DwCr1bq3/resim-16-edited.png",
    text: "Ticari Alan",
  },
  {
    id: 2,
    imgSrc: "https://i.postimg.cc/9QNmdW0n/resim-6-edited.png",
    text: "Marka Süreç ",
  },
  {
    id:3,
    imgSrc: "https://i.postimg.cc/8C5FGKJq/resim-4-edited.png",
    text: "Reklam Harcaması",
  },
  {
    id:4,
    imgSrc: "https://i.postimg.cc/2524FLhf/resim-12-edited.png",
    text: "Hammade ",
  },
  {
    id: 5,
    imgSrc: "https://i.postimg.cc/tC4G2LKQ/resim-7-edited.png",
    text: "Ar-ge",
  },
]

const hizmetText = [
  {
    id:6,
    imgSrc: "https://i.postimg.cc/8C5FGKJq/resim-4-edited.png",
    text: "Reklam Harcaması",
  },
  {
    id:7,
    imgSrc: "https://i.postimg.cc/NFrmcNVg/resim-13-edited.png",
    text: "Yurt Dışı Şirket Alma",
  },
  {
    id:8,
    imgSrc: "https://i.postimg.cc/bJZ3Z9M5/resim-14-edited.png",
    text: "Danışmanlık Hizmeti ",
  },
  {
    id:9,
    imgSrc: "https://i.postimg.cc/XJP1Lzd3/resim-22-edited.png",
    text: "Tercüman ve Belgelendirme ",
  },
  {
    id:10,
    imgSrc: "https://i.postimg.cc/Z53mdrkC/resim-21-edited.png",
    text: "Yazılım",
  },
  {
    id:11,
    imgSrc: "https://i.postimg.cc/gjBSMBhm/resim-8-edited.png",
    text: "Yurt-Dışı Birim ",
  },
]

const datas = [
  {
    header: "MAL İHRACAT TEŞVİKLERİ",
    subHeader: "İş Seyehati Teşvikleri",
    content: "Türkiye Cumhuriyeti'nin İş Seyahat Teşvikleri, Türk firmalarının yurt dışındaki iş potansiyellerini değerlendirmeleri için seyahatlerini teşvik etmektedir.",
    imgSrc: "https://i.postimg.cc/ydTLNkyB/f5bfb590-2e08-4380-884a-555e31c84ddb.jpg",
    steps: [
      {
        subHeader: "Seyahat Desteği",
        text: "Türk firmalarının yurt dışındaki iş potansiyellerini değerlendirmeleri için yapacakları iş seyahatlerinde, ulaşım ve konaklama masraflarının belirli bir oranda devlet tarafından karşılanması.",    
      },  
      {
        subHeader: "B2B Toplantı Desteği",
        text: "Türk firmalarının yurt dışında düzenlenen iş toplantılarına katılmaları ve diğer ülkelerdeki işletmelerle B2B görüşmeleri yapmaları için, seyahat masraflarının belirli bir oranda devlet tarafından karşılanması.",
      },
      {
        subHeader: "İş Geliştirme Desteği",
        text: "Türk firmalarının yurt dışındaki iş potansiyellerini değerlendirmeleri ve yeni iş fırsatları yaratmaları için yapacakları seyahatlerde, iş geliştirme konularında danışmanlık hizmeti ve destek sağlanması.",
      }
    ]
  },
  {
    header: "MAL İHRACAT TEŞVİKLERİ",
    subHeader: "Ticari Alan Teşvikleri",
    content: "Türkiye Cumhuriyeti'nin Ofis,Mağaza, Depo ve Fabrika harcamalarınız için oluşturduğu Devlet Teşvikleri, yatırımcıların Türkiye'de yeni işletme kurmalarını, var olan işletmelerini genişletmelerini ve modernize etmelerini teşvik etmektedir. Bu teşvikler arasında şunlar bulunur:",
    imgSrc: "https://i.postimg.cc/qBXPt7vN/4c7ccc49-bab7-43cb-b8e2-2d056cce9ac4.jpg",
    steps: [
      {
        subHeader: "Yatırım Teşvik Belgesi",
        text: "Yatırımcılara, yatırım projeleri için teşvik belgesi verilerek, devlet tarafından çeşitli avantajlar sağlanması.",
      },
      {
        subHeader: "KDV İstisnası",
        text: "Yeni yatırımlar için gerekli olan makine, teçhizat, demirbaş ve diğer yatırım malzemeleri için KDV istisnası.",
      },
      {
        subHeader: "Sigorta Primi Desteği",
        text: "İşe alınacak yeni personelin sigorta primlerinin belirli bir oranının devlet tarafından karşılanması.",
      },
      {
        subHeader: "Faiz Desteği",
        text: "Yeni yatırımlar için kullanılacak kredilerin faizlerinin belirli bir oranının devlet tarafından karşılanması.",
      }
    ]
  },
  {
    header: "MAL İHRACAT TEŞVİKLERİ",
    subHeader: "Marka Süreç Teşvikleri ",
    content: "Türkiye Cumhuriyeti'nin bir markayı oluşturmanız ve gerekli başvuruları yapabilmeniz için verdiği, Türk firmalarının markalaşma süreçlerini desteklemek amacıyla uygulanan teşviklerdir. Bu teşvikler arasında şunlar bulunur:",
    imgSrc: "https://i.postimg.cc/9QNmdW0n/resim-6-edited.png",
    steps: [
      {
        subHeader: "Marka Başvuru Desteği",
        text: "Türk firmalarının marka başvuruları için belirli bir oranda devlet tarafından destek sağlanması.",
      },
      {
        subHeader: "Marka Patent Harcı Desteği",
        text: "Türk firmalarının patent başvuruları için ödemesi gereken harçların belirli bir oranının devlet tarafından karşılanması.",
      },
      {
        subHeader: "Uluslararası Marka Tescil Desteği",
        text: "Türk firmalarının uluslararası marka tescil başvuruları için belirli bir oranda devlet tarafından destek sağlanması.",
      },
      {
        subHeader: "Marka Danışmanlık Desteği",
        text: "Türk firmalarına, marka oluşturma, yönetme ve koruma konularında danışmanlık hizmeti sağlanması.",
      }
    ]
  },
  {
    header: "MAL İHRACAT TEŞVİKLERİ",
    subHeader: "Reklam Harcaması Teşvikleri",
    imgSrc: "https://i.postimg.cc/KjnWSx03/e7d9fba1-7b7e-46c0-a604-36114a0940f8.jpg",
    content: "Türkiye Cumhuriyeti'nin Reklam Teşvikleri, Türk firmalarının ürünlerini ve hizmetlerini tanıtmaları ve reklam faaliyetlerini desteklemek amacıyla uygulanan teşviklerdir. Bu teşvikler arasında şunlar bulunur:",
    steps: [
      {
        subHeader: "Reklam Harcamalarının Gider Olarak Kabul Edilmesi",
        text: "Türk firmalarının yapacakları reklam harcamalarının belirli bir oranının, gider olarak kabul edilerek vergi avantajı sağlanması.",
      },
      {
        subHeader: "Yurt Dışı Reklam Desteği",
        text: "Türk firmalarının yurt dışında yapacakları reklam faaliyetleri için belirli bir oranda devlet tarafından destek sağlanması.",
      },
      {
        subHeader: "Reklam Filmi Desteği",
        text: "Türk firmalarının hazırlayacakları reklam filmleri için belirli bir oranda devlet tarafından destek sağlanması.",
      },
      {
        subHeader: "Reklam Ajansı Desteği",
        text: "Türk firmalarına, reklam ajanslarından alınacak hizmetler için belirli bir oranda devlet tarafından destek sağlanması.",
      }
    ]
  },
  {
    header: "MAL İHRACAT TEŞVİKLERİ",
    subHeader: "Hammade Teşvikleri",
    content: "Türkiye Cumhuriyeti'nin Hammadde Teşvikleri, Türk firmalarının hammaddelerini temin etmeleri ve üretimlerini sürdürebilmeleri için uygulanan teşviklerdir. Bu teşvikler arasında şunlar bulunur:",
    imgSrc: "https://i.postimg.cc/3J8Zt8C0/7621c3cb-0374-4c4b-89b0-e671d9722c80.jpg",
    steps: [
      {
        subHeader: "İthal Hammadde Gümrük Vergisi İadesi",
        text: "Türk firmalarının ithal ettikleri hammadde malzemelerinden ödedikleri gümrük vergilerinin belirli bir oranının geri ödenmesi.",
      },
      {
        subHeader: "Yerli Hammadde Kullanım Desteği",
        text: "Türk firmalarının yerli hammaddeleri kullanmaları durumunda belirli bir oranda devlet tarafından destek sağlanması.",
      },
      {
        subHeader: "Hammadde İhracat Desteği",
        text: "Türk firmalarının ürettikleri ürünleri ihraç etmek için kullanacakları hammadde malzemelerinde belirli bir oranda devlet tarafından destek sağlanması.",
      },
      {
        subHeader: "Yeni Hammadde Keşif Desteği",
        text: "Türk firmalarının üretimlerinde kullanacakları yeni hammaddelerin keşfi ve geliştirilmesi için belirli bir oranda devlet tarafından destek sağlanması.",
      }
    ]
  },
  {
    header: "MAL İHRACAT TEŞVİKLERİ",
    subHeader: "Araştırma ve Geliştirme Teşvikleri",
    content: "Türkiye Cumhuriyeti'nin Ar-Ge teşvikleri, Ar-Ge faaliyetleri yürüten firmaların Ar-Ge yatırımlarını arttırmalarına ve Ar-Ge merkezleri kurmalarına destek olmaktadır. Bu teşvikler arasında şunlar bulunur",
    imgSrc: "https://i.postimg.cc/8CH3nKfT/406005cf-5b20-4379-a985-a4bfc29e3fe5.jpg",
    steps: [
      {
        subHeader: "Ar-Ge Vergi İndirimi",
        text: "Ar-Ge faaliyetleri yapan firmaların Ar-Ge harcamaları üzerinden vergi indirimi sağlanır. Bu teşvik kapsamında, Ar-Ge faaliyetlerinde çalışan personelin maaşlarından alınan gelir vergisi stopajı oranı da düşürülmüştür.",
      },
      {
        subHeader: "Gelir Vergisi Stopajı Desteği",
        text: "Ar-Ge personelinin maaşlarından alınan gelir vergisi stopajı oranı, Ar-Ge faaliyetlerinde çalışanların sayısı ve niteliğine göre düşürülebilir.",
      },
      {
        subHeader: "Sigorta Primi Desteği",
        text: "Ar-Ge faaliyetlerinde çalışan personelin sigorta primleri, Ar-Ge faaliyetlerine katkıları oranında devlet tarafından desteklenir.",
      },
      {
        subHeader: "Faiz Desteği",
        text: "Ar-Ge faaliyetlerinde kullanılmak üzere alınan kredilerin faizleri, belirli bir oranda devlet tarafından karşılanır.",
      },
      {
        subHeader: "Kurumlar Vergisi Desteği",
        text: "Ar-Ge merkezleri kurmak isteyen firmalara, Ar-Ge merkezi kurulumu için yapacakları yatırımların kurumlar vergisi matrahından düşülmesine imkan tanınır.",
      }
    ]
  },
  {
    header:"HİZMET İHRACAT TEŞVİKLERİ",
    subHeader:"Reklam Harcaması Teşvikleri",
    content: "Türkiye Cumhuriyeti'nin Reklam Teşvikleri, Türk firmalarının ürünlerini ve hizmetlerini tanıtmaları ve reklam faaliyetlerini desteklemek amacıyla uygulanan teşviklerdir. Bu teşvikler arasında şunlar bulunur:",
    imgSrc: "https://i.postimg.cc/KjnWSx03/e7d9fba1-7b7e-46c0-a604-36114a0940f8.jpg",
    steps: [
      {
        subHeader: "Reklam Harcamalarının Gider Olarak Kabul Edilmesi",
        text: "Türk firmalarının yapacakları reklam harcamalarının belirli bir oranının, gider olarak kabul edilerek vergi avantajı sağlanması."
      },
      {
        subHeader: "Yurt Dışı Reklam Desteği",
        text: "Türk firmalarının yapacakları reklam harcamalarının belirli bir oranının, gider olarak kabul edilerek vergi avantajı sağlanması."
      },
      {
        subHeader: "Reklam Harcamalarının Gider Olarak Kabul Edilmesi",
        text: "Türk firmalarının yapacakları reklam harcamalarının belirli bir oranının, gider olarak kabul edilerek vergi avantajı sağlanması."
      },
      {
        subHeader: "Reklam Harcamalarının Gider Olarak Kabul Edilmesi",
        text: "Türk firmalarının yapacakları reklam harcamalarının belirli bir oranının, gider olarak kabul edilerek vergi avantajı sağlanması."
      }
    ]
  },
  {
    header:"HİZMET İHRACAT TEŞVİKLERİ",
    subHeader:"Yurt Dışı Şirket Alma Teşvikleri",
    content: "Türkiye Cumhuriyeti'nin Yurt Dışı Şirket Alma Teşvikleri, Türk firmalarının yurt dışında faaliyet gösteren şirketleri satın alarak uluslararası pazardaki rekabet güçlerini artırmalarını sağlamak amacıyla uygulanan teşviklerdir. Bu teşvikler arasında şunlar bulunur:",
    imgSrc: "https://i.postimg.cc/28nVLhB4/21c2e177-c270-47af-a89d-d6b7fedff220.jpg",
    steps: [
      {
        subHeader: "Yurt Dışı Şirket Alma Vergi İndirimi",
        text: "Türk firmalarının yurt dışında faaliyet gösteren şirketleri satın almaları durumunda vergi indirimi sağlanması."
      },
      {
        subHeader: "Yurt Dışı Şirket Alma Finansman Desteği",
        text: "Türk firmalarının yurt dışında faaliyet gösteren şirketleri satın almaları için finansman desteği sağlanması."
      },
      {
        subHeader: "Yurt Dışı Şirket Alma Danışmanlık Desteği",
        text: "Türk firmalarına yurt dışında faaliyet gösteren şirketleri satın alma konusunda danışmanlık hizmeti verilmesi."
      },
    ]
  },
  {
    header:"HİZMET İHRACAT TEŞVİKLERİ",
    subHeader:" Danışmanlık Hizmeti Teşvikleri ",
    content: "Türkiye Cumhuriyeti'nin Danışmanlık Hizmeti Teşvikleri, Türk firmalarının işletme faaliyetleri ile ilgili danışmanlık hizmetlerinden yararlanmalarını teşvik etmek amacıyla uygulanan teşviklerdir. Bu teşvikler arasında şunlar bulunur:",
    imgSrc: "https://i.postimg.cc/xd8f5zqp/4336d286-95d0-4116-9202-fcc62902ef20.jpg",
    steps: [
      {
        subHeader: "Danışmanlık Hizmetleri KDV İstisnası",
        text: "Türk firmalarının işletme faaliyetleri ile ilgili danışmanlık hizmetlerinden ödedikleri KDV'nin belirli bir oranının istisna edilmesi."
      },
      {
        subHeader: "Danışmanlık Hizmetleri Vergi İndirimi",
        text: "Türk firmalarının işletme faaliyetleri ile ilgili danışmanlık hizmetlerinden ödedikleri verginin belirli bir oranının indirilmesi."
      },
      {
        subHeader: "Yurt Dışı Danışmanlık Hizmetleri Desteği",
        text: "Türk firmalarının işletme faaliyetleri ile ilgili yurt dışındaki danışmanlık hizmetlerine erişimlerinin kolaylaştırılması için belirli bir oranda devlet tarafından destek sağlanması."
      },
    ]
  },
  {
    header:"HİZMET İHRACAT TEŞVİKLERİ",
    subHeader:"Tercüman ve Belgelendirme Teşvikleri",
    content: "Türkiye Cumhuriyeti'nin Tercüman ve Belgelendirme Teşvikleri, Türk firmalarının ihracat yaparken karşılaştıkları dil ve belgelendirme sorunlarını aşmalarını teşvik etmek amacıyla uygulanan teşviklerdir. Bu teşvikler arasında şunlar bulunur:",
    imgSrc: "https://i.postimg.cc/xCL5qgMW/1c7bc732-1fe0-4c66-8cc5-3165899bfc9f.jpg",
    steps: [
      {
        subHeader: "Tercümanlık Hizmetleri Desteği",
        text: "Türk firmalarının ihracat yaparken karşılaştıkları dil sorunlarının çözümü için tercümanlık hizmetlerinden belirli bir oranda devlet tarafından destek sağlanması."
      },
      {
        subHeader: "Belgelendirme Desteği",
        text: "Türk firmalarının ihracat yaparken karşılaştıkları belgelendirme sorunlarının çözümü için belgelendirme hizmetlerinden belirli bir oranda devlet tarafından destek sağlanması."
      },
    ]
  },
  {
    header:"HİZMET İHRACAT TEŞVİKLERİ",
    subHeader:"Yazılım Teşvikleri",
    content: "Türkiye Cumhuriyeti'nin Yazılım Teşvikleri, yazılım sektörünün gelişmesini teşvik etmek amacıyla uygulanan teşviklerdir. Bu teşvikler arasında şunlar bulunur:",
    imgSrc: "https://i.postimg.cc/3wX0vqfC/25fd5fd8-a2bd-4fb9-8226-8a1ecc9cc5a0.jpg",
    steps: [
      {
        subHeader: "Ar-Ge ve Tasarım Merkezleri Teşviki",
        text: "Yazılım sektöründe Ar-Ge ve tasarım faaliyetleri yapan firmalara vergi indirimleri ve teşvikler verilmesi."
      },
      {
        subHeader: "Yatırım Teşviki",
        text: "Yazılım sektöründe yatırım yapacak firmalara belirli oranlarda devlet desteği sağlanması."
      },
      {
        subHeader: "İstihdam Teşviki",
        text: "Yazılım sektöründe istihdam yaratacak firmalara belirli oranlarda devlet desteği sağlanması."
      },
    ]
  },
  {
    header:"HİZMET İHRACAT TEŞVİKLERİ",
    subHeader:"Yurt-Dışı Birim Teşvikleri",
    content: "Türkiye Cumhuriyeti'nin Yurt Dışı Birim Teşvikleri, Türk firmalarının yurt dışında yeni bir işletme kurmalarını veya mevcut işletmelerini geliştirmelerini teşvik etmek amacıyla uygulanan teşviklerdir. Bu teşvikler arasında şunlar bulunur:",
    imgSrc: "https://i.postimg.cc/WbvGh2ff/c5e301dc-b636-406d-bbf3-698fdae1d7e8.jpg",
    steps: [
      {
        subHeader: "Yurt Dışı Yatırım Destekleri",
        text: "Türk firmalarının yurt dışında yeni bir işletme kurmaları veya mevcut işletmelerini geliştirmeleri için belirli oranlarda devlet tarafından destek sağlanması."
      },
      {
        subHeader: "Yurt Dışı Tanıtım Desteği",
        text: "Türk firmalarının yurt dışında tanıtım faaliyetleri yapmaları için belirli oranlarda devlet tarafından destek sağlanması."
      },
    ]
  },
]

export default function GovernmentIncentive() {
  const [status, setStatus] = useState(true)
  const [info, setInfo] = useState(false)
  const [effectAnimation, setEffectAnimation] = useState(true)
  const [dataQue, setDataQue] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const animation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000},
  })
  useEffect(() => {
    setIsImageLoaded(true);
  }, []);

  
  const efAnim = useSpring({
    opacity: effectAnimation ? 1 : 0,
    transform: effectAnimation ? 'translateX(0)' : 'translateX(-50px)',
  })


  const Card = ({ text, id, imgSrc}) => {
    return (
      <div 
        className={`scale-95 relative lg:h-72 md:h-64 sm:h-48 lg:w-1/3 h-36 md:w-1/3 sm:w-1/2 w-1/2 bg-transparent hover:shadow-xl hover:scale-100 flex transition-all duration-700 hover:border-none cursor-pointer items-center justify-center text-center bg-no-repeat bg-center bg-cover hover:bg-top`} 
        style={{backgroundImage: `url(${imgSrc})`}} 
        id='section_font' 
        onClick={() => {
          setEffectAnimation(false);
          setDataQue(id);
          setTimeout(() => {
            setEffectAnimation(true);
            setInfo(true);
          }, 200);
        }}>
        <center>
        <h2 className=' lg:text-2xl md:text-xl sm:text-lg text-lg text-white px-4 py-4'>{text}</h2> 
        </center>
      </div>
    )
  }

  const Information = ({props}) => {

    const StepsLayer = ({text, subHeader}) => {
      return (
        <div className=' lg:px-24 md:px-12 sm:px-8 px-8 py-12 bg-white bg-opacity-90 my-2'>
          <strong className=' font-bold lg:text-2xl md:text-xl sm:text-lg text-md'>{subHeader}</strong>
          <h4 className=' text-sm lg:text-lg'>{text}</h4>
        </div>
      )
    }  

    return (
      <div className='lg:mx-6 lg:my-8 overflow-y-scroll bg-slate-950 bg-no-repeat bg-cover bg-center' id='section_font' style={{backgroundImage: `url(${props.imgSrc})`, height: '36rem'}}>
        <div className=' w-full h-auto bg-opacity-90 bg-white top-0 z-auto'>
          <button className='flex lg:px-10 lg:py-4 lg:-mb-12 text-slate-800 transition-all hover:px-12 hover:text-black text-xl duration-200' 
            onClick={
              () => {
                setEffectAnimation(false);
                setTimeout(() => {setEffectAnimation(true);setInfo(false);}, 200);
              }
            }>← Geri</button>
          <div className='items-center justify-center text-center'>
            <h2 className=' pt-8 lg:text-4xl md:text-2xl sm:text-xl text-2xl text-black inline-flex tracking-tight'>{props.header}</h2>
            <h3 className=' py-4 text-lg text-slate-800 tracking-tighter lg:text-2xl md:text-xl sm:text-lg'>-{props.subHeader}-</h3>
          </div>
        </div>
          <div className='w-full h-auto bg-white bg-opacity-90  text-black my-40 items-start'>
            <p className='lg:px-24 md:px-12 sm:px-8 px-6 py-8 lg:text-xl md:text-xl sm:text-lg text-lg text-center tracking-tighter'>{props.content}</p>
          </div>
          <div className='justify-center items-center flex mt-12'>
            <ul>
              {props.steps.map((val, key) => {
                return <StepsLayer key={key} {...val}/>
              })}
            </ul>
          </div>
          <center>
            <Link href='/contact-us'>
              <button className='lg:text-2xl md:text-xl sm:text-lg text-lg bg-opacity-100 items-center bg-white h-auto py-4 hover:translate-x-4 rounded-t-2xl transition-all duration-300 lg:w-64 md:w-48 sm:w-36 px-4 mt-8 text-black'>İLETİŞİME GEÇİN →</button>
            </Link>
          </center>
      </div>
    )
  }
  const CardsLayer = ({props}) => {
    return (
      <div className='flex flex-wrap w-full h-auto justify-between px-6 mt-4'>
        {props.map((val) => {
          return <Card key={val.id} {...val}/>
        })}
      </div>
    ) 
  }
      return (
      <animated.div style={animation}>
        <div className={`items-center justify-center bg-transparent w-full h-screen transition-all duration-200 -mt-16`}>
          <center>
            <h3 className={`pt-40 text-slate-600 block`} id='section_font'>-Devlet Teşvikleri-</h3>
            {/* <h1 className={`text-center lg:text-6xl md:text-4xl sm:text-3xl text-2xl text-black block tracking-tighter`} id='section_font'>Devlet teşvikleri buraya gelecek</h1>  */}
              <div className='h-auto'>
                {!isImageLoaded && (
                  <div className="items-center justify-center h-screen w-full flex bg-transparent pb-40">
                    <span className="loader lg:scale-1 md:scale-90 scale-75"></span>
                  </div>
               )}
                  <video src={"/public_assets/incentive_video.mp4"} height={300} width={500} controls className='rounded-lg my-8'></video>
              </div>  
            <h2 className='text-5xl' id='arr'>↓</h2>
          </center>
        </div>
        <div className={` h-auto w-full justify-center items-center bg-slate-950  ${isImageLoaded ? 'flex' : 'hidden'} `}>
          <div className=' lg:w-2/3 md:w-full md:mx-12 sm:w-full h-auto shadow-xl'>
            <div className=' w-full h-24 p-4 justify-center items-center flex mt-12'>
            <button 
              className={` 
                ${status ? 'bg-slate-950 text-white' : 'bg-transparent text-slate-500'} 
                border border-white h-16 md:h-24 w-full md:w-1/2 mx-2 text-lg md:text-3xl 
                hover:scale-105 transition-all duration-300 
              `} 
              id='section_font' 
              onClick={() => {
                setEffectAnimation(false); 
                setTimeout(() => {
                  setEffectAnimation(true); 
                  setStatus(true); 
                  setInfo(false)
                }, 200)
              }}>
              Mal İhracatı
            </button>
            <button 
              className={` ${!status ? 'bg-slate-950 text-white' : 'bg-transparent text-slate-500'}  border border-white h-16 md:h-24 w-full md:w-1/2 mx-2 text-md md:text-3xl 
              hover:scale-105 transition-all duration-300  `}
              id='section_font'
              onClick={() => {
                setEffectAnimation(false); 
                setTimeout(() => {
                  setEffectAnimation(true); 
                  setStatus(false);
                  setInfo(false)
                }, 200);
              }}>
                Hizmet İhracatı
              </button>
            </div>
            <animated.div style={efAnim}>
              {!info && <CardsLayer props={status ? malText : hizmetText}/> }
              {info && <Information props={datas[dataQue]}/>}
            </animated.div>
          </div>
        </div>
      </animated.div>
    )
}