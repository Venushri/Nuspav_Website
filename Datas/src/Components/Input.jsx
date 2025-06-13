import React from 'react'
import styled from 'styled-components'

const Input = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="search-container">
          <input className="input" type="text" placeholder="Search..." />
          <svg viewBox="0 0 24 24" className="search__icon">
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
        </div>
      </div>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  .container {
    position: relative;
    background: linear-gradient(135deg, rgb(179, 208, 253) 0%, rgb(164, 202, 248) 100%);
    border-radius: 1000px;
    padding: 4px; /* reduce vertical padding */
    display: grid;
    place-content: center;
    z-index: 0;
    max-width: 320px; /* increase width */
    width: 260px;     /* set a wider width */
    margin: 0 5px;
  }

  .search-container {
    position: relative;
    width: 100%;
    border-radius: 50px;
    background: linear-gradient(135deg, rgb(218, 232, 247) 0%, rgb(214, 229, 247) 100%);
    padding: 2px; /* reduce vertical padding */
    display: flex;
    align-items: center;
  }

  .input {
    padding: 4px 25px; /* reduce height, keep horizontal padding */
    width: 100%;
    background: linear-gradient(135deg, rgb(218, 232, 247) 0%, rgb(214, 229, 247) 100%);
    border: none;
    color: #9EBCD9;
    font-size: 15px;
    border-radius: 50px;
    height: 32px; /* set a fixed, smaller height */
  }

  .input:focus {
    outline: none;
    background: linear-gradient(135deg, rgb(239, 247, 255) 0%, rgb(214, 229, 247) 100%);
  }

  .search__icon {
    width: 22px;
    aspect-ratio: 1;
    border-left: 2px solid white;
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    border-radius: 50%;
    padding-left: 4px;
    margin-right: 4px;
  }

  .search__icon:hover {
    border-left: 3px solid white;
  }

  .search__icon path {
    fill: white;
  }
`

export default Input