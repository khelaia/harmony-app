import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import styled from '@emotion/styled/macro'
import mq from 'mediaQuery'

import { H2 as DefaultH2, Title } from '../components/Typography/Basic'
import Anchor from '../components/Icons/Anchor'
import slugify from 'slugify'
import ReverseRecordImageSrc from '../assets/reverseRecordImage.png'
import {
  NonMainPageBannerContainer,
  DAOBannerContent
} from '../components/Banner/DAOBanner'

const H2 = styled(DefaultH2)`
  margin-top: 50px;
  margin-left: 20px;
  ${mq.medium`
    margin-left: 0;
  `}
`

const Question = styled('h3')`
  font-size: 15px;
  margin-right: 0.5em;
  display: inline;
`

const Answer = styled('p')``

const AnchorContainer = styled('a')``

const ImageContainer = styled('div')`
  margin: 2em;
`

const ReverseRecordImage = styled('img')`
  width: 100%;
  ${mq.medium`
    width: 600px;
  `}
`

const Section = ({ question, children }) => {
  let slug
  if (question) {
    slug = slugify(question, {
      lower: true
    })
  }
  return (
    <>
      <Question id={slug}>{question}</Question>
      <AnchorContainer href={`#${slug}`}>
        <Anchor />
      </AnchorContainer>

      <Answer>{children}</Answer>
    </>
  )
}

function Faq() {
  const { t } = useTranslation()
  useEffect(() => {
    document.title = 'HNS Faq'
  }, [])

  return (
    <>
      {/*<NonMainPageBannerContainer>*/}
      {/*  <DAOBannerContent />*/}
      {/*</NonMainPageBannerContainer>*/}
      <FaqContainer>
        <Title>FAQ</Title>
        <H2>Before You register</H2>
        <Section question="Is HNS only for storing an harmony address?">
          No, you can store the addresses of over 100 blockchains, a content
          hash of a decentralized website, profile information such as an avatar
          and Twitter handle, and more.
        </Section>

        {/* <Section question="Can I use an ENS name to point to my website?">
          Though ENS can technically store anything, there aren't many third
          party tools and applications which resolve IP addresses attached to
          ENS.
          <br />
          Instead, we suggest hosting your static html/css/images on IPFS and
          put the hash in your ENS name's Content record. Then it can be
          resolved by ENS-aware browsers (e.g. Opera), browser extensions
          (Metamask), or any browser with ".link" or ".limo" appended to the end
          (e.g. matoken.one.link or matoken.one.limo).
          <br />
          If you want to redirect your ENS name to an existing website, you
          could write a html file containing JavaScript logic to redirect to
          your website, upload the file into ipfs using services like{' '}
          <a href="https://pinata.cloud/">IPFS Pinata</a>, then set the CID to
          your contenthash. See the source code of depositcontract.one.link as
          an example.
        </Section> */}

        <Section question="What is the maximum length of a name I can register?">
          There is no limit on the name length.
        </Section>

        <Section question="Can you have names with emojis?">Yes.</Section>

        <Section question="How much does it cost to register a .one name?">
          Currently, registration costs are set at the following prices:
          <ul>
            <li>5+ character .one names: $6 in ONE per year.</li>
            <li>4 character .one names: $30 in ONE per year.</li>
            <li>3 character .one names $120 in ONE per year.</li>
          </ul>
          3 and 4 character names have 'premium' pricing to reflect the small
          number of these names available.
          <br />
          Also, if the name was previously owned by someone but recently
          released, it has a temporary decreasing premium to prevent squatters
          snatching up names.
        </Section>

        <H2>When you register</H2>

        <Section question="At step 1, the transaction was slow so I speeded up">
          Our app cannot currently detect that you sped up the transaction.
          Please refresh the page and start from step 1 again.
        </Section>

        <Section question="I am stuck at step 2">
          At times, the counter waits for up to a minute at the end of step 2 to
          make sure that the Matic blockchain has progressed. If this continues
          for more than 5 min after moving to step 2, please contact us on
          Discord.
          <br />
          Note that if you leave it at step 2 for more than 7 days, it gets
          reset and you have to start from step 1 again.
        </Section>

        <Section question="My transaction at step 3 failed">
          This happens occasionally when the USD price changes and you haven't
          registered with enough ONE. Please try again from step 3.
          <br />
          Please also be noted that the registration step will expire if you
          don't complete within 24 hrs and you have to start from step 1 again.
        </Section>

        <Section question="I cannot see the names I registered on OpenSea nor on my wallet">
          This occasionally happens when OpenSea is under a heavy load. You may
          also not find your name under the NFT section of your wallet, as many
          wallets fetch metadata from OpenSea.
          <br />
          As long as you can see your registered name under "My Account" on our
          site or your ONE address under the name section, your name is
          registered successfully.
        </Section>

        <Section question="Is it safe to refresh the page, close the browser, or switch to different browser/machine?">
          It is safe to refresh the page or close the browser once step 1
          transaction is complete. However you cannot switch to different
          devices or machines because it needs a locally stored “secret” which
          will be used at step 3. Please also do not delete browser history
          during the registration.
        </Section>

        <H2>After you register</H2>

        <Section question="What is the difference between the Registrant and Controller?">
          If your harmony address is set as the Controller you can change the
          resolver and add/edit records. Some dapps (eg: Fleek, OpenSea) set
          themselves as the Controller so they can update records on your
          behalf.
          <br />
          The Registrant only exists on ".one" names and it allows you to change
          the Controller. If you transfer the Registrant to an address you don't
          own, you lose the ownership of the name.
        </Section>

        <Section question="What is a Resolver?">
          A Resolver is a smart contract that holds records. Names are set by
          default to the Public Resolver managed by the HNS team and has all the
          standard HNS record types. You can set your Resolver to a custom
          resolver contract if you,d like.
        </Section>

        <Section question="What is a Primary HNS Name record?">
          A Primary HNS Name record (formerly Reverse Record) makes your harmony
          address point to an HNS name. This allows dapps to find and display
          your HNS name when you connect to them with your harmony account. This
          can only be set by you so it is not set automatically upon
          registration.
          <br />
          To set the Primary HNS Name record, please click "My account", and
          select "Primary HNS Name".
        </Section>

        <Section question="How do I unregister my name?">
          If you click the "trash bin" icon on the address record, it will unset
          your address so that people can no longer look up your address with
          the name. You can also unset ownership of subdomains in this way, but
          you cannot do so on ".one" addresses. Because ".one" names are
          ERC721-compliant NFTs, you cannot transfer them to an empty address
          (0x00000...). You can transfer it to a burn address (eg: 0x00001), but
          that does not erase the fact that you used to own the name. Also, the
          name will not become available for registration again until the
          registration period and grace period runs out.
        </Section>

        <Section question="How do I transfer my name?">
          For a ".one" name, transfer both the Registrant and the Controller to
          the new harmony account. Since ".one" names are ERC721 compliant NFTs,
          you can change the Registrant by simply transferring the NFT from any
          NFT compliant wallet/marketplace as well.
          <br />
          Note that transferring the ownership (aka the Registrant) of the name
          does not change the controller nor records, so the recipient may need
          to update them once received. If the recipient is not experienced or
          you prefer your address not to be associated to the transferring
          names, it may be a good idea for you to set the ONE Address record to
          their harmony address, set the controller, then transfer the name.
          <br />
          For subdomains, there are no registrants unless the subdomain is
          customised to be ERC721 compliant. Simply set the controller to the
          new address (after setting the record to the new address).
        </Section>

        <H2>When you extend your registration</H2>

        <Section question="How do I receive an extension reminder?">
          Click the "Remind me" button on the name's page or your address page
          so that you can set a calendar reminder or email reminder. Note that
          you have to set calendar reminders per name, whereas you only need to
          set email reminders per the address of the owner. Also note that you
          can register a name for multiple years, removing the need to extend
          each year.
        </Section>

        <Section question="What happens if I forget to extend the registration of a name?">
          After your name expires, there is a 90 day grace period in which the
          owner can't edit the records but can still re-register the name. After
          the grace period, the name is released for registration by anyone with
          a temporary premium which decreases over a 28 days period. The
          released name continues to resolve your ONE address until the new
          owner overwrites it.
        </Section>

        <Section question="I lost access to the harmony account that owns a name I registered. Can I still extend its registration period?">
          Any harmony account can pay to extend the registration of any HNS
          name, though doing so from an account that's not the owner will not
          change ownership of the name. Just go to the name's page and click
          "Extend".
        </Section>
      </FaqContainer>
    </>
  )
}

const FaqContainer = styled('div')`
  margin: 1em;
  padding: 20px 40px;
  background-color: white;
`

export default Faq
