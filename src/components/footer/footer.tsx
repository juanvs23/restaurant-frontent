import styled from "styled-components"
import lackfooter from '../../public/rectangle-33.jpg'
import FormSuscript from "../FormSuscript/FormSuscript";
import GoToButton from "../goToButton";
import LogoBrand from "../logo/logoBrand";
import SocialNetwork from "../SocialNetwork";
import SponImage from "../SponImage";


const FooterWrpper=styled.footer`
background-image:url(${lackfooter.src});
background-repeat: no-repeat;
    background-size: cover;
    z-index:10;
  
.footer-middle{
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    ul {
        list-style: none;
        padding-inline-start: 0;
        margin: 0;
        li{
            margin-bottom:15px;
        }
    }
    h2{
        a{
            font-size:3rem;
            color:var(--golden);
        }
    }
    h3,h2{
        text-align:center;
       color:white;
    }
    p{
        text-align:center;
        margin:0;
    }
}
.footer-bottom{
    padding:10px;
    text-align:center;
    
    p{
        text-align:center;
        margin:0;
font-size:13px;
    }
    padding-bottom:5rem;
    @media (max-width:991px){
        padding-bottom:2.5rem;
    }
}
`
export function Footer(){
   
    return (
        <FooterWrpper id="footer">
         <div className="container">
        
        <FormSuscript />

<div className="row footer-middle">
    <div className="element onlyDesktop">
        <h3>
        Contact Us
        </h3>
        <ul>
            <li>
                <p>9 W 53rd St, New York, NY 10019, USA</p>
            </li>
            <li>
                <p>
                    +1 212-344-1230
                  </p>
           
                <p>
                +1 212-555-1230
                </p>
            </li>
        </ul>
    </div>
    <div className="element center">
        <h2>
        <LogoBrand />
        </h2>
        <ul>
            <li>
                <p>"The best way to find yourself is to lose yourself in the service of others.”</p>
            </li>
            <li>
            <SponImage/>
            </li>
            <li>
               <SocialNetwork/>
            </li>
        </ul>
    </div>
    <div className="element onlyMobil">
        <h3>
        Contact Us
        </h3>
        <ul>
            <li>
                <p>9 W 53rd St, New York, NY 10019, USA</p>
            </li>
            <li>
                <p>
                    +1 212-344-1230
                  </p>
                  
                <p>
                +1 212-555-1230
                </p>
            </li>
        </ul>
    </div>
    <div className="element">
        <h3>
        Working Hours
        </h3>
        <ul>
           

            <li>
                <p>
                Monday-Friday:
                </p>
                <p>
                08:00 am -12:00 am
                  </p>
            </li>
            <li>
            <p>
            Saturday-Sunday:

                </p>
                <p>
                07:00am -11:00 pm
                  </p>
            </li>
        </ul>
    </div>
</div>
<div className="footer-bottom">
    <p>
    2021 Gerícht. All Rights reserved.
    </p>
</div>
         </div>
        <GoToButton/>
        </FooterWrpper>
    )
}