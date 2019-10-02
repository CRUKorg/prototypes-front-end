import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import TextField from "../components/UI/TextField/TextField"
import Button from "../components/UI/Button/Button"

const StyledButton = styled(Button)`
  width: 100%;
`

const StyledLink = styled(Button)`
  color: #ec008c;
  padding-left: 0;
`

const IndexPage = () => (
  <Layout>
    <h1>Login</h1>
    <form>
      <TextField label="Email address" name="" />
      <TextField label="Password" name="password" type="password" />
      <StyledButton
        type="submit"
        appearance="primary"
        onClick={() => alert("💵 We have your password 💵")}
      >
        Login
      </StyledButton>
      <StyledLink appearance="link" href="#" icon="chevronRight">
        Forgotten your password?
      </StyledLink>
    </form>
  </Layout>
)

export default IndexPage
