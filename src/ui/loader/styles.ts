import styled, { keyframes } from 'styled-components'

export const loaderAnimation = keyframes`
    0% { box-shadow: -10px 20px, 10px 35px , 0px 50px }
    25% { box-shadow: 0px 20px ,  0px 35px, 10px 50px }
    50% { box-shadow: 10px 20px, -10px 35px, 0px 50px }
    75% { box-shadow: 0px 20px, 0px  35px, -10px 50px }
    100% { box-shadow: -10px 20px, 10px  35px, 0px 50px}
  `

export const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
 
  `
export const LoaderAnimation = styled.span`
	width: 48px;
	height: 6px;
	display: block;
	margin: auto;
	position: relative;
	border-radius: 4px;
	color: ${({ theme }) => theme.colors.primary.orange};
	box-sizing: border-box;
	animation: ${loaderAnimation} 0.6s linear infinite;
	transform: translateY(-30px);
`

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	background-color: #00000038;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: ${({ theme }) => theme.borderRadius}px;
`

export const ButtonLoaderAnimation = styled.span`
	width: 39px;
	height: 39px;
	border: 5px dotted ${({ theme }) => theme.colors.primary.orange};
	border-radius: 50%;
	display: inline-block;
	position: relative;
	box-sizing: border-box;
	animation: ${rotation} 2s linear infinite;
`
