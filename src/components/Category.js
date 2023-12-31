import {FaPizzaSlice , FaHamburger} from 'react-icons/fa';
import {GiNoodles , GiChopsticks} from 'react-icons/gi';
import styled from 'styled-components';
import '../index.css'
import { NavLink } from 'react-router-dom';


function Category() {
  return (
    <div className='List'>
        <Slink to={'/cuisine/Italian'} >
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </Slink>

        <Slink to={'/cuisine/American'} >
            <FaHamburger/>
            <h4>American</h4>
        </Slink>
        <Slink to={'/cuisine/Thai'} >
            <GiNoodles/>
            <h4>Thai</h4>
        </Slink>
        <Slink to={'/cuisine/Japanese'} >
            <GiChopsticks/>
            <h4>Japanese</h4>
        </Slink>
       
    </div>
  )
}

const Slink = styled(NavLink)`
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
border-radius:50%;
margin-right:2rem;
background:linear-gradient(35deg,#494949,#313131);
width:6rem;
height:6rem;
cursor:pointer;
transform:scale(0.8);

h4{
    color:white;
    font-size:1rem;
    font-weight:600;
}

svg{color:white;
font-size:25px
}

&.active{
    background:linear-gradient(to right , #f27121,#e94057);
   
    svg{
        color:white;
    }

    h4{
        color:white;
    }
}
`

export default Category