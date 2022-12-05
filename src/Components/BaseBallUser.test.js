import React from "react";
import { render } from "@testing-library/react";
import BaseBallUser from "./BaseBallUser";

describe("BaseBall User Component", () => {
  const mockFormSubmit = jest.fn();
  const stubbedUserData = {
    id: "",
    email: "",
    username: "",
    mobilenumber: "",
    password: "",
    confirmpassword: "",
    
  };

  it("Show all input fields with empty value", () => {
    const { getByTestId } = render(
      <BaseBallUser onFormSubmit={mockFormSubmit} user={stubbedUserData} />
    );

    expect(getByTestId("email").value).toBe("");
    expect(getByTestId("username").value).toBe("");
    expect(getByTestId("mobilenumber").value).toBe("");
    expect(getByTestId("password").value).toBe("");
    expect(getByTestId("confirmpassword").value).toBe("");
    
  });
});
