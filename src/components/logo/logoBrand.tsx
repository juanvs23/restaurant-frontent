import Link from "next/link";
import styled from "styled-components";

const LogoLink=styled.div`
a{
    font-size:2rem;
color:var(--white);
text-decoration:none;
font-family: 'Cormorant Upright', serif;
font-weight:700;
text-transform:uppercase;
letter-spacing:1.2px;
}
`

const LogoBrand=()=>{
    return(
        <LogoLink>
            <Link href={'/'}>
                <a>
                    Gerícht
                </a>
            </Link>
        </LogoLink>
    )
}
export default  LogoBrand