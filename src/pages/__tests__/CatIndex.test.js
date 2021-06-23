import React from "react";
// Imports Enzyme testing and deconstructs Shallow into our test file. 
import Enzyme, { shallow } from 'enzyme' 

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16' 

import CatIndex from "../CatIndex";

Enzyme.configure({ adapter: new Adapter() })



describe("on initial load it should...", () => {
   
    it("render a header", () => {
        const catIndex = shallow(<CatIndex/>)
        const header = catIndex.find('h1')
        expect(header.text()).toEqual("All the cats");
    })
})

