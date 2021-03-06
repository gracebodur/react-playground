// make React available
import React from "react";

//make the ReactDOM available, necessary for rendering the component
import ReactDOM from "react-dom";

//make the App component available
import App from "./App";
import renderer from "react-test-renderer";
import Tabs from "./state/Tabs.js";

describe(`Tabs Component`, () => {
  const tabsProp = [
    {
      name: "First tab",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque."
    },
    {
      name: "Second tab",
      content:
        "Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      name: "Third tab",
      content:
        "Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur."
    }
  ];
  //this is the test case
  it("renders without crashing", () => {
    // first create a DOM element to render the component into
    const div = document.createElement("div");

    //render the component, this is the actual test, if something is wrong it will fail here
    ReactDOM.render(<App />, div);

    //clean up code
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders the first tab by default", () => {
    const tree = renderer.create(<Tabs tabs={tabsProp} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
