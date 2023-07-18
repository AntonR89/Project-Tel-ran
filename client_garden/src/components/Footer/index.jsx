import React from 'react';
import instagram_img from './Footer_img/instagram_img.svg';
import whatsapp_img from './Footer_img/whatsapp_img.svg';
import s from './index.module.css';

export default function Footer() {
  return (
    <div className={s.footer}>
        <div className={s.contact_container}>
          <div className={s.messenger_contact}>
            <h2>Contact</h2>
            <p>+49 999 999 99 99</p>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <img src={instagram_img} alt='instagram'/>
            </a>
            <a href="https://www.whatsapp.com" target="_blank" rel="noreferrer">
              <img src={whatsapp_img} alt='whatsapp'/>
            </a>
          </div>
          <div className={s.adress_contact}>
            <h2>Adress</h2>
            <a href="//www.google.com/maps/place/Linkstra%C3%9Fe+2%2F8.+Etage,+10785+Berlin/@52.5079137,13.3725267,17z/data=!3m1!4b1!4m6!3m5!1s0x47a851cbdd6cfe0f:0xb4b0903f299decf1!8m2!3d52.5079105!4d13.3751016!16s%2Fg%2F11pvcv3309?entry=ttu" target="_blank" rel="noreferrer">
              Linkstraße 2, 8 OG, 10785, Berlin, Deutschland
            </a>
          </div>
        </div>
        <div className={s.map}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.410459266542!2d13.375101599999999!3d52.5079105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851cbdd6cfe0f%3A0xb4b0903f299decf1!2sLinkstra%C3%9Fe%202%2F8.%20Etage%2C%2010785%20Berlin!5e0!3m2!1sru!2sde!4v1689518480004!5m2!1sru!2sde" 
            width="100%" 
            height="525" 
            style={{border: '0'}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
    </div>
  );
}
