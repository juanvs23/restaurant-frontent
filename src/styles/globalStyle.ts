import { createGlobalStyle } from 'styled-components'
/**
 * font-family: 'Cormorant Upright', serif;
font-family: 'Open Sans', sans-serif;
 */
const GlobalStyle = createGlobalStyle`
:root{
    --white:#ffffff;
    --white2:#AAAAAA;
    --black:#000;
    --golden:#DCCA87;
    --black2:#0C0B08;
    --golden2: #F5EFDB;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}

.button {
    padding: 8px 38px;
    border-radius: 0;
    color: var(--black2);
    text-decoration: none;
    font-family: 'Cormorant Upright';
    border: 1px solid var(--golden);
    background-color: var(--golden);
    font-weight: bold;
    transition: 0.5s all;
    appearance: none;
    display:inline-block;
    &:hover{
        background-color:transparent;
        color:var(--golden);
    }
}

html,body {
    box-sizing: border-box;
    font-size:16px;
    background-color:var(--black2);
    color:var(--white2);
    margin:0;
    overflow-x:hidden;
    font-family:'Open Sans', sans-serif;
    line-height:1.5;
    scroll-behavior: smooth;
  }
  section{
      min-height:100vh;
  }
h1,h2,h3,h4,h5,h6{
    font-family: 'Cormorant Upright', serif;
    margin:0;
}
p{
    margin:0;
    margin-bottom:1rem;
}
h1{
    font-size:3.5rem;
    margin-bottom:2rem;
}
h2{
    font-size:3rem;
}
h3{
    font-size:2rem;
}
h4{
    font-size:1.4rem;
}
h5{
    font-size:1.2rem;
}
h6{
    font-size:1rem;
}
.container {
    max-width: 1300px;
    margin: auto;
    width:100%;
    position:relative;
}
.justify-center{
    justify-content:center !important;
}
.row{
    display: flex;
    justify-content: space-between;
   
    align-items: center;
}
.element{
    padding-left:15px;
    padding-right:15px;
   
}
.element-50{
    padding-left:15px;
    padding-right:15px;
    width:50%;
}
.element-40{
    padding-left:15px;
    padding-right:15px;
    width:40%;
}
.element-30{
    padding-left:15px;
    padding-right:15px;
    width:30%;
}
.element-20{
    padding-left:15px;
    padding-right:15px;
    width:20%;
}
.no-gutter{
    padding:0 !important;
}
  @media (max-width:991px){
    .element-50,
    .element-40,
    .element-20,
    .element-30{
        padding-left:15px;
        padding-right:15px;
        width:100%;
    }
      .row{
          flex-direction:column;
          flex-flow: wrap;
      }
    .element,.center{
       
        width:100% !important;
    }
    .onlyMobil{
        display:block !important;
    }
    .onlyDesktop{
        display:none !important;
    }
  }
  @media (min-width:992px){
    .onlyMobil{
        display:none !important;
    }
    .onlydesktop{
        display:block !important;
    }
        .element{
            width:25%;
        }
        .element.center{
            width:38%;
        }
  }
`
export default  GlobalStyle