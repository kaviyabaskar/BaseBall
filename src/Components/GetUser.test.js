import React from "react";
import { render, screen } from "@testing-library/react";
import UserList from "./GetUser";
import axios from "axios";

const BASE_URL = "https://localhost:7167/api/baseball";

jest.mock("axios");

describe("Add User Component", () => {
  const mockEditUser = jest.fn();

  it("Should have all columns in the header", () => {
    render(<UserList editUser={mockEditUser} />);
    expect(screen.getByText("email")).toBeInTheDocument();
    expect(screen.getByText("Username")).toBeInTheDocument();
    expect(screen.getByText("Mobilenumber")).toBeInTheDocument();
    expect(screen.getByText("Password")).toBeInTheDocument();
    expect(screen.getByText("Confirmpassword")).toBeInTheDocument();
    
  });
  it("should return users list while loading", async () => {
    const users = [
      {
        id: 1,
        email: "testemail",
        username: "testUsername",
        mobilenumber: "Mobilenumber",
        password: "111111",
        confirmpassword: "111111",
        
      },
      {
        id: 2,
        email: "testemail",
        username: "testUsername",
        mobilenumber: "Mobilenumber",
        password: "111111",
        confirmpassword: "111111",
              },
      {
        id: 3,
        email: "testemail",
        username: "testname",
        mobilenumber: "testmobilenumber",
        password: "111111",
        confirmpassword: "111111",
      },
    ];
    // Mocking the Axios.get to return the Users value
    axios.get = jest.fn();
    axios.get.mockResolvedValueOnce(users);

    // when
    render(<UserList editUser={mockEditUser} />);

    // then - verify that the get endpoint has been called
    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/GetAllBaseBall`);
  });
});
