import theme from 'styles/theme'
import { renderWithTheme } from 'utils/tests/helpers'
import { Container } from '.'

describe('<Container />', () => {
  it('should render the styles', () => {
    const { container } = renderWithTheme(
      <Container>
        <span>Won Games</span>
      </Container>
    )
    expect(container.firstChild).toHaveStyleRule(
      'max-width',
      theme.grid.container
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
