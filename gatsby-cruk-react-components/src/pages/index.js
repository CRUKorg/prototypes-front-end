import React, { useState } from "react"
import { ThemeProvider } from "styled-components"
import Layout from "../components/layout"
import {
  Avatar,
  Badge,
  Button,
  Box,
  Checkbox,
  Collapse,
  ErrorText,
  Heading,
  Icon,
  Loader,
  Modal,
  Pagination,
  PopOver,
  ProgressBar,
  Radio,
  RadioGroup,
  Select,
  Step,
  TextField,
  Totaliser,
  UserBlock,
} from "cruk-react-components"

import su2cTheme from "../themes/su2c"

const IndexPage = () => {
  const [theme, setTheme] = useState({})
  const [showModal, setShowModal] = useState(false)
  const toggleShowModal = () => setShowModal(!showModal)
  const [page, setPage] = useState(1)
  const [selectedOption, setSelectedOption] = useState("one")
  const [selectedEmail, setSelectedEmail] = useState("yes")
  const [selected, setSelected] = useState(["one"])

  const handleSelectChange = value => {
    if (selected.indexOf(value) === -1) {
      setSelected([...selected, value])
    } else {
      setSelected(selected.filter(item => item !== value))
    }
  }

  const handelThemeChange = () => {
    setTheme(Object.keys(theme).length === 0 ? su2cTheme : {})
  }

  return (
    <Layout>
      <ThemeProvider theme={theme}>
        <Button appearance="primary" onClick={handelThemeChange}>
          Change theme!
        </Button>
        <Avatar name="Sam" size="small" />
        <Badge bgColor="secondary">This is a badge</Badge>
        <Box>This is box</Box>
        <Box bgColor="primary">This is box</Box>
        <Button>Some button</Button>
        <Button appearance="primary">Primary</Button>
        <Checkbox
          name="example"
          onChange={e => handleSelectChange(e.target.value)}
          value="one"
          checked={selected.indexOf("one") >= 0}
        >
          Option one
        </Checkbox>
        <Checkbox
          name="example"
          onChange={e => handleSelectChange(e.target.value)}
          value="two"
          checked={selected.indexOf("two") >= 0}
        >
          Option two
        </Checkbox>
        <Collapse headerTitle="What is Lorem Ipsum?" id="default">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </Collapse>
        <ErrorText>This is error text</ErrorText>
        <Heading h1>This is H1 heading</Heading>
        <Heading h2>This is H2 heading</Heading>
        <Heading h3>This is H3 heading</Heading>
        <Icon />
        <Icon size="36px" color="primary" hover="primaryHover" />
        <Icon size="48px" color="secondary" />
        <Icon name="calendar" />
        <Icon name="chevronRight" />
        <Loader />
        <Button appearance="primary" onClick={toggleShowModal}>
          Show me a modal
        </Button>
        {showModal && (
          <Modal disableEsc={false} closeButton={toggleShowModal}>
            <Heading h2>Modal title</Heading>
            <p>Some realy important information</p>
            <Button onClick={toggleShowModal}>Get me out of here</Button>
            <Button appearance="primary" onClick={toggleShowModal}>
              Go for it 😃
            </Button>
          </Modal>
        )}
        <Pagination
          current={page}
          perPage={10}
          items={100}
          pagerCallback={n => setPage(n)}
        />
        <Pagination
          current={page}
          perPage={10}
          items={100}
          hideLast
          pagerCallback={n => setPage(n)}
        />
        <PopOver
          overlay={
            <Button icon="facebookSquare" appearance="link" size="large" />
          }
        >
          <Button icon="share" appearance="secondary">
            Share top
          </Button>
        </PopOver>
        <ProgressBar percentage="50" />
        <ProgressBar percentage="50" isCircular />
        <Radio
          name="example1"
          onChange={e => setSelectedOption(e.target.value)}
          value="one"
          checked={selectedOption === "one"}
        >
          Option one
        </Radio>
        <Radio
          name="example1"
          onChange={e => setSelectedOption(e.target.value)}
          value="two"
          checked={selectedOption === "two"}
        >
          Option two
        </Radio>
        <RadioGroup
          legend="Email"
          name="email"
          onChange={e => setSelectedEmail(e.target.value)}
          attributes={[
            { option: "Yes", value: "yes" },
            { option: "No", value: "no" },
          ]}
          checked={selectedEmail}
        />
        <Select error="This feild is required ☹️" label="Error message">
          <option value="cat">Cat</option>
        </Select>
        <Step
          current="3"
          steps={["Account", "Details", "Activity", "Motivation", "Page"]}
        />
        <TextField
          label="Extra left"
          extraLeft="£"
          error="This field has an error 🙁"
        />
        <Totaliser
          total="120"
          giftAid="27.5"
          target="100"
          summary={(target, percentage) =>
            `${percentage}% of your ${target} 🎯`
          }
        />
        <UserBlock
          name="Sam Smith"
          size="large"
          extra={
            <React.Fragment>
              <Icon name="clock" /> Just now
            </React.Fragment>
          }
        />
      </ThemeProvider>
    </Layout>
  )
}

export default IndexPage
