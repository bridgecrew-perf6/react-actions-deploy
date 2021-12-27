import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 0.5rem;
`

export const SwitchContainer = styled.div`
  display: flex;
  width: 4rem;
  background: transparent;
  border: 1px solid #e2e2e2;
  border-radius: 1.5rem;
  cursor: pointer;
  padding: 3px;
  justify-content: ${props => props.active === 'first' ? 'flex-start' : 'flex-end'};
`

export const Selector = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background: #009242;
`

export const Label = styled.span`
  color: white;
  font-family: 'Monument Grotesk', sans-serif;
  margin-bottom: 1rem;
`
