import { Meta, Story } from '@storybook/react'
import Logo from '.'

export default {
  title: 'Logo',
  component: Logo,
  args: {}
} as Meta

export const Default: Story = (args) => <Logo {...args} />
