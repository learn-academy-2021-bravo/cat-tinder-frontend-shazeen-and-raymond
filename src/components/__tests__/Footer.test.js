import React from "react";
// Imports Enzyme testing and deconstructs Shallow into our test file. 
import Enzyme, { shallow } from 'enzyme' 

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16' 

import Footer from "../Footer";

Enzyme.configure({ adapter: new Adapter() })


describe("on initial load it should...", () => {
   
    it("render Footer", () => {
        const footerComponent = shallow(<Footer/>)
        const img = footerComponent.find('img')
        expect(img.length).toEqual(1);
    })
})
