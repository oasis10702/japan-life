import React from 'react';

import Nav from './Nav';
import ImageLightbox from '../ImageLightbox';
import tokyoImage from '../../assets/images/tokyo.jpg';
import kobeImage from '../../assets/images/kobe.jpg';
import monjikoImage from '../../assets/images/monjiko.jpg';
import hakodateImage from '../../assets/images/hakodate.jpg';
import fukuokaImage from '../../assets/images/fukuoka.jpg';
import karuizawaImage from '../../assets/images/karuizawa.jpg';
import kokuraImage from '../../assets/images/kokura.jpg';
import kyotoImage from '../../assets/images/kyoto.jpg';
import sagaImage from '../../assets/images/saga.jpg';
import yuhuinImage from '../../assets/images/yuhuin.jpg';
import osakaImage from '../../assets/images/osaka.jpg';
import yokohamaImage from '../../assets/images/yokohama.jpg';

import './styles.scss';

const HorizontalSection = () => (
  <>
    {/* TODO: update slider by anime.js */}
    <div id="horizontalSection" className="horizontalSection">
      <Nav />
      <div className="horizontalSection__item">
        <ImageLightbox image={tokyoImage} title="TOKYO" />
        <ImageLightbox image={kobeImage} title="KOBE" />
        <ImageLightbox image={monjikoImage} title="MONJIKO" />
      </div>
      <div className="horizontalSection__item">
        <ImageLightbox image={hakodateImage} title="HAKODATE" />
        <ImageLightbox image={fukuokaImage} title="FUKUOKA" />
        <ImageLightbox image={karuizawaImage} title="KARUIZAWA" />
      </div>
      <div className="horizontalSection__item">
        <ImageLightbox image={kokuraImage} title="KOKURA" />
        <ImageLightbox image={kyotoImage} title="KYOTO" />
        <ImageLightbox image={sagaImage} title="SAGA" />
      </div>
      <div className="horizontalSection__item">
        <ImageLightbox image={yuhuinImage} title="YUHUIN" />
        <ImageLightbox image={osakaImage} title="OSAKA" />
        <ImageLightbox image={yokohamaImage} title="YOKOHAMA" />
      </div>
    </div>
  </>
);

export default HorizontalSection;
