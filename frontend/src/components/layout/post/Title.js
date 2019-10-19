import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import size from '../../../constants/size'
import Info from '../Info'

const Container = styled.div`
  width: 100%;
  margin: 0 auto 50px auto;
  @media ${size.sm}{
    margin-bottom: 30px;
  }
`

const StyledTitle = styled.h2`
  margin-top: 50px;
  font-size: 2.4rem;
  color: ${({ theme }) => theme.text};
  font-weight: 800;
  text-align: ${({ center }) => center ? 'center' : 'left'};
  text-transform: capitalize;

  @media ${size.sm}{
    font-size: 2rem;
    padding-left: 10px;
  }
  @media ${size.xs}{
    font-size: 1.5rem;
  }
`
export default function Title({ center = false, text, date, read }){
  return (
    <Container>
      <StyledTitle center={center}>{ text }</StyledTitle>
      <Info className="post-info" date={date} read={read}/>
    </Container>
  )
}

Title.propTypes = {
  center:   PropTypes.bool,
  date:     PropTypes.instanceOf(Date),
  read:     PropTypes.number.isRequired,
  text:     PropTypes.string.isRequired
}
