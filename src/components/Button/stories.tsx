import { Meta, Story } from '@storybook/react'
import { AddShoppingCart } from '@styled-icons/material/AddShoppingCart'
import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    }
  },
  args: {}
} as Meta

export const Default: Story = (args) => <Button {...args} />

Default.args = {
  children: 'Buy now'
}
export const withIcon: Story = (args) => <Button {...args} />

withIcon.args = {
  size: 'small',
  children: 'Buy now',
  icon: <AddShoppingCart />
}

export const withClickEvent: Story = (args) => <Button {...args} />

withClickEvent.args = {
  size: 'small',
  children: 'Buy now',
  icon: <AddShoppingCart />,
  onclick: () => alert('Click Event dispatch')
}
export const asLink: Story = (args) => <Button {...args} />

asLink.args = {
  size: 'large',
  children: 'Buy now',
  as: 'a',
  href: '/link'
}
