import Counter from "./index";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import React from "react";

const stories = storiesOf("Counter", module);

stories.add("Counter", () => (
  <Counter
    counter={1}
    increment={action("increment")}
    decrement={action("decrement")}
  />
));
