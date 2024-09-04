import React from "react";
import {
  Button,
  TextInput,
  Checkbox,
  Textarea,
  Select,
  Card,
  Title,
  Text,
} from "@mantine/core";

const ManitneExample = () => {
  return (
    <div className="p-8">
      <Title order={2}>Mantine UI Example</Title>
      <Text>
        This demonstrates how to use some common Mantine UI components in a
        React application.
      </Text>

      <div className="my-8 space-y-4">
        <TextInput label="Name" placeholder="Enter your name" />
        <Checkbox label="Remember me" />
        <Textarea label="Description" placeholder="Tell us more" />
        <Select
          label="Favorite color"
          placeholder="Pick one"
          data={[
            { value: "red", label: "Red" },
            { value: "blue", label: "Blue" },
            { value: "green", label: "Green" },
          ]}
        />
        <Button color="blue">Submit</Button>
      </div>

      <Card shadow="sm" p="lg">
        <Title order={3}>Card Title</Title>
        <Text>
          This is the card content. Mantine provides a variety of UI components
          to build modern user interfaces.
        </Text>
      </Card>
    </div>
  );
};

export default ManitneExample;
