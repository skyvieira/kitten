import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import * as S from "./styles";

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      kittendata {
        footers {
          logo {
            url
          }
          location
          address
          city
          phone1
          phone2
          email
          daycare
          workday1
          workday2
          links
          home
          about
          service
          reservation
          contact
          socials
          social1
          link1
          social2
          link2
          social3
          link3
          social4
          link4
          rights
          reference
        }
      }
    }
  `);

  const query = data.kittendata.footers[0];

  const content = {
    contact: [
      {
        title: query.location,
        informations: [
          query.address,
          query.city,
          query.phone1,
          query.phone2,
          query.email
        ]
      },
      {
        title: query.daycare,
        informations: [
          query.workday1,
          query.workday2
        ]
      },
    ],
    links: {
      title: query.links,
      informations: [
        {
          text: query.home,
          link: `#${query.home.toLowerCase()}`
        },
        {
          text: query.about,
          link: `#${query.about.toLowerCase()}`
        },
        {
          text: query.service,
          link: `#${query.service.toLowerCase()}`
        },
        {
          text: query.reservation,
          link: `#${query.reservation.toLowerCase()}`
        },
        {
          text: query.contact,
          link: `#${query.contact.toLowerCase()}`
        }
      ]
    },
    social: {
      title: query.socials,
      informations: [
        {
          text: query.social1,
          link: query.link1
        },
        {
          text: query.social2,
          link: query.link2
        },
        {
          text: query.social3,
          link: query.link3
        },
        {
          text: query.social4,
          link: query.link4
        }
      ]
    }
  };
  
  return (
    <S.Container id="contact">
      <S.Wrapper>
        <S.Logo src={query.logo.url} alt="Logo" />

        {content.contact.map((item, i) => (
          <S.Info key={i}>
            <S.Category>{item.title}</S.Category>
              <ul>
                {item.informations.map((info, i) => <S.Text key={i}>{info}</S.Text>)}
              </ul>
          </S.Info>
        ))}
        <S.Info>
          <S.Category>{content.links.title}</S.Category>
            <ul>
              {content.links.informations.map((info, i) => (
                <S.Text key={i}>
                  <S.Link href={info.link}>{info.text}</S.Link>
                </S.Text>
              ))}
            </ul>
        </S.Info>
        <S.Info>
          <S.Category>{content.social.title}</S.Category>
            <ul>
              {content.social.informations.map((info, i) => (
                <S.Text key={i}>
                  <S.Link href={info.link} target="_blank">{info.text}</S.Link>
                </S.Text>
              ))}
            </ul>
        </S.Info>
      </S.Wrapper>
      
      <div style={{background: '#2e2f34'}}>
        <S.Copyright>{query.rights}</S.Copyright>
      </div>
      <div style={{background: '#222326'}}>
        <S.Reference>{query.reference}</S.Reference>
      </div>
    </S.Container>
  );
}