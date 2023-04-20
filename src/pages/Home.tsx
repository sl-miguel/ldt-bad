import { useContext } from 'react';
import GetStarted from '../components/GetStated';
import BoxList from '../components/Box/BoxList';
import { LivingDexContext } from '../context/LivingContext';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigation = useNavigate();
  const livingDex = useContext(LivingDexContext);

  return (
    <div className="container mx-auto ">
      {livingDex.boxes.length ? (
        <div>
          <BoxList boxes={livingDex.boxes} />
          <button
            onClick={() => navigation('/boxes/new')}
            className="btn btn-primary"
          >
            New Box
          </button>
        </div>
      ) : (
        <GetStarted />
      )}
    </div>
  );
}

export default Home;
