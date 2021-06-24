import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import CatNew from "../CatNew";
Enzyme.configure({ adapter: new Adapter() });

describe("when CatNew loads...", () => {
  it("should render a label with the value of Cats name", () => {
    const catNew = shallow(<CatNew />);
    const label = catNew.find("Label");
    expect(label.length).toEqual(3);
  });
});
