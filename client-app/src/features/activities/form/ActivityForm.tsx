import { Button, Form, Segment } from "semantic-ui-react";

export default function ActivityForm() {
  return (
    <Segment clearing>
        <Form>
            <Form.Input placeholder='Tilte'/>
            <Form.TextArea placeholder='Description'/>
            <Form.Input placeholder='Cateroty'/>
            <Form.Input placeholder='Date'/>
            <Form.Input placeholder='City'/>
            <Form.Input placeholder='Venue'/>
            <Button floated='right' possitive type='submit' content='Submit'/>
            <Button floated='right'type="button" content='Cancel'/>
        </Form>
    </Segment>
  )
}
