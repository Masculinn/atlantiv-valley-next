'use client'

import React, {useEffect, useState, useRef }from 'react';
import { animated, useSpring } from 'react-spring';
import dynamic from 'next/dynamic';
import "leaflet/dist/leaflet.css";

const L = dynamic(() => import('react-leaflet'), { ssr: false });

function Map() {
  const [hoveredMarker, setHoveredMarker] = useState(null);
  const officeLocations = [
    { lat: 42.69744437111342, lng: 23.323370269239742, name: 'Atlantic Valley Sofya / Bulgaristan' },
    { lat: 41.002448398192776, lng: 29.053941082517355, name: 'Atlantic Valley İstanbul / Türkiye' },
    { lat: 43.065193154206334, lng: -107.1578067176503, name: 'Atlantic Valley Wyoming / ABD' },
    { lat: 52.225651199978536, lng: 21.013623195334112, name: 'Atlantic Valley Varşova / Polonya' }
  ];

  const markerIcon = L && new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    shadowSize: [41, 41],
    shadowAnchor: [12, 41]
  });

  return (
    <L.MapContainer center={[60.6974, -28.3234]} zoom={1.5} id='map'>
      <L.TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {officeLocations.map((location, index) => (
        <L.Marker
          key={index}
          position={[location.lat, location.lng]}
          icon={markerIcon}
          eventHandlers={{
            mouseover: () => {
              setHoveredMarker(index);
            },
            mouseout: () => {
              setHoveredMarker(null);
            },
          }}
        >
          {(hoveredMarker === index) && <L.Popup autoClose={true} autoPan={true}>{location.name}</L.Popup>}
        </L.Marker>
      ))}
    </L.MapContainer>
  );
}


export default function World() {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => !prev);
            observer.disconnect();
          }
        }, { threshold: 0.1 });
    
        observer.observe(ref.current);
    
        return () => {
          observer.disconnect();
        }
      }, []);
  
  const officeLocations = [
    {
      location: 'ABD / Wyoming',
      tel: '+1 (555) 123-4567',
      def: 'E-Ticaret Operasyon Merkezi'
    },
    {
      location: 'Polonya / Varşova',
      tel: '+44 20 1234 5678',
      def: 'Avrupa Yatırım Danışmanlık Ofisi'
    },
    {
      location: 'Türkiye / İstanbul',
      tel: '+81 3 1234 5678',
      def: 'Türkiye Faaliyetleri Yatırım Merkezi'
    },
    {
      location: 'Bulgaristan / Sofya',
      tel: '+61 2 1234 5678',
      def: 'Operasyonel Faaliyetler Şubesi'
    }
  ];

  const Locations = () => {
        return (
        <div className="flex flex-wrap justify-center">
            {officeLocations.map((office, index) => (
            <Office key={index} {...office} />
            ))}
        </div>
        );
    };

    const Office = ({location, tel, def}) => {
        const styles = useSpring({
            from: { opacity: 0, transform: 'translateX(-50px)' },
            to: {
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
            },
            delay: 200,
        });


    return (
      <animated.div style={styles} className="w-full h-auto md:w-1/2 lg:w-1/2 py-6 px-2" ref={ref}>
        <div className="bg-white shadow-lg rounded-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{location}</div>
            <h2 className='mb-2 text-gray-500'>{def}</h2>
            <div className="items-center -mx-3 mb-4 ">
              <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                <div className="text-gray-800">Telefon</div>
                <div className="font-bold text-sm">{tel}</div>
              </div>
            </div>
          </div>
        </div>
      </animated.div> 
    
    );
  };
    return (
      <div className='w-full h-auto mb-24'>
        <center>
          <h2 className='text-2xl mt-12 lg:mt-36 lg:text-3xl md:text-xl' id='section_font'>Atlantic Valley Partners Ofisleri</h2>
          <hr className='border border-black lg:block md:block sm:hidden hidden mt-8' width={'50%'} />
        </center>
        <div className='flex flex-col lg:flex-row items-center justify-center mx-8 lg:mx-0'>
          <Map className='h-auto w-full' />
          <div className='h-auto w-full lg:w-1/2  pt-8 pb-8' id='section_font'>
              <div className='pt-8 w-full h-auto'>
                <Locations />
              </div>
          </div>
        </div>
      </div>
  )
}