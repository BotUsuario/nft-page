import Button from "./Button";
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <>
      <div className="bg-tertiary py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto">
          <div className="flex flex-col gap-8 text-center items-center md:items-start">
            <h1 className="text-5xl text-center md:text-left md:text-8xl font-primary font-semibold text-primary">
              Discover{" "}
              <span className="text-secondary underline decoration-solid">
                Coleccion 3D
              </span>{" "}
              en el{" "}
              <span className="text-secondary underline decoration-solid">
                mundi
              </span>
            </h1>
            <p className="md:text-xl text-primary">
              lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, 
            </p>
            <div className="flex justify-between w-3/4">
              <div className="text-primary text-center">
                <h1 className="text-xl md:text-3xl font-semibold">$423M</h1>
                <p className="text-sm md:text-base">Trading Volumen</p>
              </div>
              <div className="text-primary text-center">
                <h1 className="text-xl md:text-3xl font-semibold">30k</h1>
                <p className="text-sm md:text-base">Work</p>
              </div>
              <div className="text-primary text-center">
                <h1 className="text-xl md:text-3xl font-semibold">1.9M</h1>
                <p className="text-sm md:text-base">User</p>
              </div>
            </div>
            <div>
                <Button text='join new' size='lg' variant='primary-outline'/>
            </div>
          </div>
          <div className="hidden md:block">
          <Spline scene="https://prod.spline.design/Yyvr5FqVYf1WgEhb/scene.splinecode" className="cursor-pointer"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
