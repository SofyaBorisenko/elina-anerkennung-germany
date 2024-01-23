import '../App.scss';
import './Hero.scss';
import '../assets/Hero_photo.jpg';

const Hero = () => {
  return (
    <div>
      <div className='hero-container'>
        <div className='hero-content'>
          <h1>
            Достойная иммиграция
            <br />и устойчивая интеграция
            <br /> <span className='highlighted-heading'>в Германии</span>
          </h1>
          <h4>
            От тупика к ясности: настройте свой курс
            <br />
            на профессиональный и учебный успех
            <br />с моей поддержкой!
          </h4>
          <button className='hero-button'>Записаться на консультацию</button>
        </div>
        <div className='hero-background'></div>
      </div>
      <div className='yellow-divider'></div>
    </div>
  );
};

export default Hero;
