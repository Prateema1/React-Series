import { fireEvent, render, screen} from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should load Header Component with a login button", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
      <Header />
    </Provider>
        </BrowserRouter>
    
    );

    const logInButton = screen.getByRole("button");

    //In case of multiple button present and to get specific button
    // const logInButton = screen.getByRole("button", {name: "Login"});

    expect(logInButton).toBeInTheDocument();
    
})


it("Should render Header Component with cart items 0", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
      <Header />
    </Provider>
        </BrowserRouter>
    
    );

    const cartItems = screen.getByText("Cart - 0 items");

    //In case of multiple button present and to get specific button
    // const logInButton = screen.getByRole("button", {name: "Login"});

    expect(cartItems).toBeInTheDocument();
    
})

it("Should change login button to logout on click", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
      <Header />
    </Provider>
        </BrowserRouter>
    
    );

    const logInButton = screen.getByRole("button", {name: "Login"});

    fireEvent.click(logInButton);

    const logoutButton = screen.getByRole("button", {name: "LogOut"});

    expect(logoutButton).toBeInTheDocument();
    
})