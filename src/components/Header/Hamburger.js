import React from 'react'
import styled from '@emotion/styled/macro'

const HamburgerContainer = styled('div')`
  background: white;
  border-radius: 8px;
  ${p =>
    p.isMenuOpen
      ? `
    background: white;
  `
      : ''}

  button {
    &:focus {
      outline: 0;
    }
  }

  .hamburger {
    padding: 5px 0 8px 8px;
    display: inline-block;
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: visible;
    color: black;
    &:is-active {
      padding-top: 15px;
      color: black !important;
    }
  }
  .hamburger:hover {
    opacity: 0.7;
  }

  .hamburger-box {
    width: 40px;
    height: 24px;
    display: inline-block;
    position: relative;
    color: black;
  }

  .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -2px;
    color: black;
  }
  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after {
    width: 30px;
    height: 1px;
    color: black;
    background-color: #000;
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }

  .hamburger-inner::before,
  .hamburger-inner::after {
    content: '';
    color: black;
    display: block;
  }

  .hamburger-inner::after {
    content: '';
    display: none;
    color: black;
  }

  .hamburger-inner::before {
    top: -10px;
    color: black;
  }
  .hamburger-inner::after {
    bottom: -10px;
    color: black;
  }

  .hamburger--collapse-r .hamburger-inner {
    top: auto;
    bottom: 0;
    color: black;
    transition-duration: 0.13s;
    transition-delay: 0.13s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .hamburger--collapse-r .hamburger-inner::after {
    top: -20px;
    color: black;
    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      opacity 0.1s linear;
  }
  .hamburger--collapse-r .hamburger-inner::before {
    color: black;
    transition: all 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  .hamburger--collapse-r.is-active .hamburger-inner {
    transform: translate3d(0, -10px, 0) rotate(45deg);
    transition-delay: 0.22s;
    color: black !important;
    background: #1d1d1d;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .hamburger--collapse-r.is-active .hamburger-inner::after {
    top: 0;
    color: black !important;
    background: #1d1d1d;
    opacity: 0;
    transition: all 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
      opacity 0.1s 0.22s linear;
  }
  .hamburger--collapse-r.is-active .hamburger-inner::before {
    top: 0;
    color: black;
    background: #1d1d1d;
    transform: rotate(90deg);
    transition: all 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
      transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  .hamburger--collapse-r.is-active .hamburger-inner,
  .hamburger--collapse-r.is-active .hamburger-inner::after,
  .hamburger--collapse-r.is-active .hamburger-inner::before {
    color: black;
    background: black;
  }
`

const Hamburger = ({ isMenuOpen = false, openMenu }) => (
  <HamburgerContainer isMenuOpen={isMenuOpen}>
    <div className="mobile-nav">
      <button
        className={`hamburger hamburger--collapse-r ${
          isMenuOpen ? 'is-active' : ''
        }`}
        type="button"
        onClick={openMenu}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </button>
    </div>
  </HamburgerContainer>
)

export default Hamburger
