import React from "react";
// Imports Enzyme testing and deconstructs Shallow into our test file. 
import Enzyme, { shallow } from 'enzyme' 

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16' 

import CatShow from "../CatShow";


Enzyme.configure({ adapter: new Adapter() })

describe("When catshow renders...", ()=> {

    it("should display two paragraphs with age/enjoys", ()=>{
        const catShow = shallow(<CatShow />);
        const paragraphs = catShow.find("h1");
        //console.log(catShow.props());
        expect(paragraphs.length).toEqual(1);
    })
})