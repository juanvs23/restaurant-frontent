import { FaFacebookF,FaInstagram,FaTwitter } from "react-icons/fa";
import styled from 'styled-components'

const SocialNetworkWrapper=styled.div`
display:flex;
justify-content:center;
gap:20px;
a{
    color:var(--golden2);
    transition:0.5s all;
    &:hover{
        color:var(--golden);
    }
}

`


export default function SocialNetwork() {
    const socials=[
        {
            socialNetwork:'facebook',
            url:'https://www.facebook.com',
            title:'Facebook',
            icon:FaFacebookF
        },
        {
            socialNetwork:'Twitter',
            url:'https://www.twitter.com',
            title:'Twitter',
            icon:FaTwitter
        },
        {
            socialNetwork:'Instagram',
            url:'https://www.instagram.com',
            title:'Instagram',
            icon:FaInstagram
        },
    ]
    return(
        <SocialNetworkWrapper>
            {
                socials.map((social,i)=>{
                    return (<a  key={i} href={social.url} title={social.title} target="_blank" rel="noopener noreferrer">< social.icon /></a>   )
                })
            }
        </SocialNetworkWrapper>
    )
}