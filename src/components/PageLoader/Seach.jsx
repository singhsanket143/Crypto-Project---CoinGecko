import  { useState } from 'react';
import SyncLoader from 'react-spinners/ScaleLoader';

const Loader = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {loading && (
        <SyncLoader
          size={20}        
          width={5}         
          margin={4}       
          color="#900"   
          loading={loading}  
          speedMultiplier={0.75}  
          cssOverride={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }} 
        />
      )}
    </div>
  );
};

export default Loader;
