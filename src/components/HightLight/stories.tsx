import { Meta, Story } from '@storybook/react'
import HightLight, { HightLightProps } from '.'

export default {
  title: 'HightLight',
  component: HightLight,
  args: {
    title: "Read Dead it's back",
    subtitle: "Come see John's new adventures",
    buttonLabel: 'Buy now',
    buttonLink: '/rdr2',
    backgroundImage: '/img/red-dead-img.jpg'
  }
} as Meta

export const Default: Story<HightLightProps> = (args) => (
  <HightLight {...args} />
)
export const WithFloatImage: Story<HightLightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <HightLight {...args} />
  </div>
)

WithFloatImage.args = {
  floatImage: '/img/red-dead-float.png'
}
