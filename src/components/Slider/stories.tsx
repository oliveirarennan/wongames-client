import { Meta, Story } from '@storybook/react'
import { Settings } from 'react-slick'
import styled from 'styled-components'
import Slider from '.'

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
}

export default {
  title: 'Slider',
  component: Slider,
  args: {}
} as Meta

const Slide = styled.div`
  background: gray;
  padding: 30rem;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`

export const Default: Story = (args) => (
  <Slider settings={settings} {...args}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
    <Slide>6</Slide>
  </Slider>
)

export const Horizontal: Story = (args) => (
  <Slider settings={settings} {...args}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
    <Slide>6</Slide>
  </Slider>
)

const verticalSettings: Settings = {
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  slidesToShow: 3
}

export const Vertical: Story = (args) => (
  <Slider settings={verticalSettings} {...args}>
    <Slide>1</Slide>
    <Slide>2</Slide>
    <Slide>3</Slide>
    <Slide>4</Slide>
    <Slide>5</Slide>
    <Slide>6</Slide>
  </Slider>
)
