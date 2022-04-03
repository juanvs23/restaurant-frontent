import { useContext } from "react"
import styled from "styled-components"
import { RestaurantUseContext } from "../../context"


const Nav=styled.div`
ul{
    list-style:none;
    padding-inline-start:0;
    display:flex;
    gap:10px;
    li{
        display:flex;
        align-items:center;
        text-decoration:none;
        color:var(--white);
        cursor:pointer;
        padding:5px;
        transition:0.5s all ease-in-out;
        border-bottom:2px solid transparent;
        button{
            apparence:none;
            background:transparent;
            border:none;
            color:white;
            font-family:'Open Sans',sans-serif;
            font-size:1rem;
            cursor:pointer;
        }
        &:hover{
            transition:0.5s all ease-in-out;
            border-bottom:2px solid var(--golden);
        }
        &:first-of-type::after{
            display: inline-block;
            content: '';
            background: var(--white);
            height: 30px;
            width: 1px;
            margin-left: 15px;
        }
    }
    
    a{
        text-decoration:none;
        color:var(--white);
        cursor:pointer;
        padding:5px;
       
    }
    
}

@media(max-width:991px){
    width:100%;
    ul{
        flex-direction:column;
        width:100%;
        li{
            width:100%;
            height:50px;
            border:2px solid transparent;
            text-align:center;
            transition:0.5s all ease-in-out;
            justify-content:center;
            &:first-of-type::after{
                display:none;
                
            }
            &:hover{
                background:var(--golden);
            }
        }
}

`

export default function LoginMenu(){
    const {  openLoginState:{setopenLogin} }=useContext<   any >(RestaurantUseContext )
 return (<Nav> 
            <ul>
                <li><button  onClick={()=>setopenLogin((openLogin:boolean)=>!openLogin)} >Log in / registration</button></li>
                <li>book table</li>
            </ul> 
        </Nav>)
}