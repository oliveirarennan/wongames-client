import { Meta, Story } from '@storybook/react'
import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Default Title',
    description: 'Default Description'
  }
} as Meta

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: 'Basic Title',
  description: 'Basic Description'
}
export const Default: Story = (args) => <Main {...args} />
