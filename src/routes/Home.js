import React, { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled/macro'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import mq from 'mediaQuery'

import SearchDefault from '../components/SearchName/Search'
import NoAccountsDefault from '../components/NoAccounts/NoAccountsModal'
import TextBubbleDefault from '../components/Icons/TextBubble'
import QuestionMarkDefault from '../components/Icons/QuestionMark'
import HowToUseDefault from '../components/HowToUse/HowToUse'
import ENSLogo from '../components/HomePage/images/ENSLogo.svg'
import { aboutPageURL } from '../utils/utils'
import { connectProvider, disconnectProvider } from '../utils/providerUtils'
import { gql } from '@apollo/client'
import Typewriter from 'typewriter-effect'

// Import Swiper React components

// Import Swiper styles

import 'styles.css'

const HeroTop = styled('div')`
  display: grid;
  padding: 20px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  grid-template-columns: 1fr;
  ${mq.small`
     grid-template-columns: 1fr 1fr;
  `}
`

const NoAccounts = styled(NoAccountsDefault)``

const Network = styled('div')`
  margin-bottom: 5px;
`
const Name = styled('span')`
  margin-left: 5px;
  text-transform: none;
  display: inline-block;
  width: 100px;
`

const NetworkStatus = styled('div')`
  color: white;
  font-weight: 200;
  text-transform: capitalize;
  display: none;
  ${mq.small`
    display: block;
  `}
  ${mq.medium`
    left: 40px;
  `}

  &:before {
    position: absolute;
    right: 100%;
    top: 50%;
    transform: translate(-5px, -50%);
    content: '';
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #fff;
  }
`

const Nav = styled('div')`
  display: flex;
  justify-content: center;
  ${mq.small`
    justify-content: flex-end;
  `}
  a {
    font-weight: 300;
    color: white;
  }
`

const NavLink = styled(Link)`
  margin-left: 20px;
  &:first-child {
    margin-left: 0;
  }
`

const ExternalLink = styled('a')`
  margin-left: 20px;
  &:first-child {
    margin-left: 0;
  }
`

const Announcement = styled('div')`
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: #00ade7;
  padding: 0 10px;
  border-bottom: #00ade7 solid 3px;
  h3 {
    color: white;
    font-weight: 400;
    text-align: center;
    padding: 0 20px;
    margin-bottom: 10px;
  }
  p {
    text-align: center;
    color: white;
  }
  a {
    color: white;
    text-decoration: none;
  }
`

const HowToUse = styled(HowToUseDefault)`
  padding: 70px;
`

const Hero = styled('section')`
  // background-image: linear-gradient( 135deg, #ABDCFF 10%, #0396FF 100%);
  background-size: 100px 100px;
  padding: 60px 20px 20px;
  position: relative;
  display: inline-grid;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 570px;
  ${mq.medium`
    padding: 0 20px 0;
  `}
`

const SearchContainer = styled('div')`
  margin: 0 auto 0;
  margin-top: 1em;
  display: flex;
  margin-bottom: auto;
  flex-direction: column;
  ${mq.medium`
    min-width: 60%;
  `}
  > h2 {
    color: white;
    font-size: 38px;
    font-weight: 100;
    margin-bottom: 10px;
  }

  > h3 {
    color: white;
    font-weight: 100;
    font-size: 24px;
    margin-top: 0;
  }
`

const Search = styled(SearchDefault)`
  ${mq.medium`
    min-width: 780px;
  `}
  .language__switch_container {
    display: none;
  }
  input {
    width: 100%;
    border-radius: 6px;
    ${mq.medium`
      border-radius: 6px;
      font-size: 28px;
    `}
  }
  margin-bottom: 4em !important;

  button {
    border-radius: 0 6px 6px 0;
  }
`

const Explanation = styled('div')`
  display: grid;
  width: 100%;

  grid-template-columns: 1fr;
  grid-template-rows: auto;
  ${mq.medium`
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  `}
  grid-gap: 0;
`

const H2 = styled('h2')`
  font-size: 30px;
  font-weight: 500;
`

const Section = styled('section')`
  display: flex;
  justify-content: center;
  align-items: center;
`

const WhatItIs = styled(Section)`
  padding: 40px 20px 80px;
  p {
    font-size: 18px;
  }
`

const HowItWorks = styled(Section)`
  background: #f0f6fa;
  padding: 40px 20px 80px;
`

const Inner = styled('div')`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 350px;

  > p {
    font-weight: 300;
    font-size: 20px;
    margin-bottom: 1.5em;
  }
`
const NameAnimation = styled(Section)`
  display: block;
  height: 100%;
`

const TextBubble = styled(TextBubbleDefault)`
  margin-right: 10px;
`

const QuestionMark = styled(QuestionMarkDefault)`
  transform: scale(1.18);
  margin-right: 10px;
`

const LogoLarge = styled(motion.img)`
  // background:#0b64bb;
  width: 100%;
  margin-bottom: 4em !important;
  margin-top: 2em !important;
  margin: 0 auto 0;
  ${mq.medium`
    width: 323px;
  `};
  @media (max-width: 767px) {
    width: 223px;
  }
`

const PermanentRegistrarLogo = styled(motion.h1)`
  font-family: Overpass;
  font-weight: 800;
  font-size: 18px;
  text-transform: uppercase;
  color: #4258d3;
  letter-spacing: 1.8px;
  text-align: right;
  line-height: 24px;
  @media (max-width: 767px) {
    display: none;
  }
  margin-top: 10px;
  margin-bottom: 50px;
  text-align: center;
`

const ReadOnly = styled('span')`
  margin-left: 1em;
`

export const HOME_DATA = gql`
  query getHomeData($address: string) @client {
    network
    displayName(address: $address)
    isReadOnly
    isSafeApp
  }
`

export const GET_ACCOUNT = gql`
  query getAccounts @client {
    accounts
  }
`

const animation = {
  initial: {
    scale: 0,
    opacity: 0
  },
  animate: {
    opacity: 1,
    scale: 1
  }
}

export default ({ match }) => {
  useEffect(() => {
    document.title = 'Harmony Name Service'
  }, [])
  const { url } = match
  const { t } = useTranslation()

  const {
    data: { accounts }
  } = useQuery(GET_ACCOUNT)

  const {
    data: { network, displayName, isReadOnly, isSafeApp }
  } = useQuery(HOME_DATA, {
    variables: { address: accounts?.[0] }
  })

  return (
    <Hero>
      <HeroTop>
        <NetworkStatus>
          <Network>
            {`${network} ${t('c.network')}`}
            {isReadOnly && <ReadOnly>({t('c.readonly')})</ReadOnly>}
            {!isReadOnly && displayName && (
              <Name data-testid="display-name">({displayName})</Name>
            )}
          </Network>
          {!isSafeApp && (
            <NoAccounts
              onClick={isReadOnly ? connectProvider : disconnectProvider}
              buttonText={isReadOnly ? t('c.connect') : t('c.disconnect')}
            />
          )}
        </NetworkStatus>

        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/favourites">{t('c.favourites')}</NavLink>
          <NavLink to="/faq">F.A.Q</NavLink>
          {accounts?.length > 0 && !isReadOnly && (
            <NavLink
              active={url === '/address/' + accounts[0]}
              to={'/address/' + accounts[0]}
            >
              {t('c.mynames')}
            </NavLink>
          )}
          {/*<ExternalLink href={'/ROADMAP.pdf'} target={'_blank'}>*/}
          {/*  Roadmap*/}
          {/*</ExternalLink>*/}
          {/*<ExternalLink href={'/WHITEPAPER.pdf'} target={'_blank'}>*/}
          {/*  Whitepaper*/}
          {/*</ExternalLink>*/}
        </Nav>
        {/*<MainPageBannerContainer>*/}
        {/*  <DAOBannerContent />*/}
        {/*</MainPageBannerContainer>*/}
      </HeroTop>
      <SearchContainer>
        <>
          <LogoLarge src={'/main-logo.png'} alt="ENS logo" />
          <PermanentRegistrarLogo
            initial={animation.initial}
            animate={animation.animate}
          />
          <Search />
        </>

        <>
          <div className={'typewriter'}>
            Decentralized Naming For &nbsp;
            <Typewriter
              options={{
                strings: ['WEB3', 'USERNAMES', 'WALLETS', 'YOU'],
                autoStart: true,
                loop: true
              }}
            />
            {/* <Typewriter
            options={{
              strings: ['web3', 'usernames'],
              loop: true,
              delay:1500,
              autoStart: true,

            }}
              onInit={(typewriter) => {
              typewriter.typeString("web3!")
                .pauseFor(1500)
                .deleteChars(5)
                .typeString("usernames!")
                .pauseFor(1500)
                .deleteChars(10)
                .typeString("websites!")
                .pauseFor(1500)
                .deleteChars(9)
                .typeString("wallets!")
                .deleteChars(8)
                .typeString("you!")
                .start();
            }}
          /> */}
          </div>
        </>
      </SearchContainer>

      <>
        <div className="bottom-section-wrapper">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/HarmonyDomains/"
          >
            {' '}
            <div className="text-bottom-wrapper"> Twitter </div>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://t.me/harmonydomains/"
          >
            {' '}
            <div className="text-bottom-wrapper"> Telegram </div>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://discord.gg/nX7ZdcSsNt"
          >
            {' '}
            <div className="text-bottom-wrapper"> Discord </div>{' '}
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/hnsdomains/"
          >
            {' '}
            <div className="text-bottom-wrapper"> Github </div>{' '}
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://docs.hnsdomains.one/"
          >
            {' '}
            <div className="text-bottom-wrapper"> Docs </div>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://hnsdomains.one/roadmap.pdf"
          >
            {' '}
            <div className="text-bottom-wrapper"> Roadmap </div>
          </a>
        </div>
      </>
    </Hero>
  )
}
