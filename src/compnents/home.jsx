import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

function Home(props) {
  const navigate = useNavigate();
  useEffect(() => {
    if (props.currPage==="user") {  // check if its loggedIn in localStorage evrytime page reloads or any state is  changed
      navigate('/user', {replace:true});   //navigate to user
    }
  }, []);
  return (
    <div className='main-body home'>
      <h1 data-aos="fade-right">Guest Regester</h1>
      <p data-aos="fade-right">Here's the ultimate digital regester for costumer details.</p>
    </div>
  )
}

export default Home;
