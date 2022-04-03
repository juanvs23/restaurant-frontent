import styled from "styled-components";
import Link from "next/link";
import { routes } from "../../routes";
import { useRouter } from "next/router";

const MenuWrapper=styled.ul`
list-style:none;
padding-inline-start:0;
margin:0;
li{
    padding:5px;
    transition:0.5s all ease-in-out;
    border-bottom:2px solid transparent;
}
li:hover{
    padding:5px;
    transition:0.5s all ease-in-out;
    border-bottom:2px solid var(--golden);
}
a{
    color: white;
    text-decoration:none;
}

`
export default function Menu() {
    const router=useRouter()
    return(
        <MenuWrapper>
            {routes.map((link,i)=>{
                return(
                    <li key={i} className={`links ${router.pathname==`${link.path}`?'activeLink':''}`}>
                    <Link href={`${link.path}`}>
                    <a>{link.title}</a>
                    </Link>
                </li>
                )
            })}
        </MenuWrapper>
    )
}