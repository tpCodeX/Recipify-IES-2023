import { render, screen } from '@testing-library/react'
import NavBar from '@/components/navbar-component/NavBar'

describe('Index Page', () => {

    test('NavBar renderizado correctamente', () => {
      render(<NavBar/>);
      const NavBarComp=screen.getByTestId("NavBar")
      expect(NavBarComp).toBeInTheDocument();
    });


});