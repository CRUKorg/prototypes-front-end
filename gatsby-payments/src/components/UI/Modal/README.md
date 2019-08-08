# Modal

Use a modal to display content over top of the rest of the site which must be interatced with before the user can continue.

## Modals are great

* Modals are positioned over everything else in the document and remove scroll from the "body" tag so that modal content scrolls instead.
* Modals are unmounted when closed.
* Modal's "trap" focus in them, ensuring the keyboard navigation cycles through the modal, and not the rest of the page.

### Try it out

```.jsx
function () {
  const [showModal, setShowModal] = React.useState(false);
  const toggleShowModal = () => setShowModal(!showModal);
  
  return (
    <>
      <Button appearance="primary" onClick={toggleShowModal}>Show me a modal</Button>
      {showModal &&
        <Modal closeButton={toggleShowModal}>
          <Heading h2>Modal title</Heading>
          <p>Some realy important information</p>
          <Button onClick={toggleShowModal}>Get me out of here</Button>
          <Button appearance="primary" onClick={toggleShowModal}>Go for it 😃</Button>
        </Modal>
      }
    </>
  );
}
```

| Name | Type | Options | Default | Description |
| :- | :- | :-: | :- | :- |
| closeButton | funtion | | null | Display an 'X' button on top right to close the modal. |
| cildren | Any |  |  | Any renderable content to be displayed in modal |
