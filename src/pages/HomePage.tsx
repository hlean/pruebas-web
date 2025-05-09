import Services from '@/components/home/Services';
import Features from '@/components/home/Features';
import Mission from '@/components/home/Mission';
import Traking from '@/components/home/Traking';

const HomePage = () => {
  return (
    <>      
      <Traking />
      <Services />      
      <Mission />
      <Features />
    </>
  );
};

export default HomePage;