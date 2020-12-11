import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../components/Search';
import {cleanup, fireEvent, render, screen} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import { act } from 'react-dom/test-utils';

describe("Search Component",()=>{
    it("renders h1 tag without crashing",()=>{
        const div = document.createElement('div');
        ReactDOM.render(<h1></h1>, div);
    });    
    it("renders the input text field without crashing",()=>{
        const div = document.createElement('div');
        ReactDOM.render(<input type="text"/>, div);
    });
    it("the input field's placeholder text value",()=>{
        const {getByPlaceholderText} = render(<input type="text" placeholder="Enter City Name"/>);
        expect(getByPlaceholderText("Enter City Name")).toBeInTheDocument();
    })
    it("Renders button without crashing",()=>{
        const div = document.createElement('div');
        ReactDOM.render(<button></button>,div);
    });
    it("renders the button correctly",()=>{
        const {getByText} = render(<button>Search</button>);
        expect(getByText('Search')).toHaveTextContent('Search');
    });
    it("renders form without crashing",()=>{
        const div = document.createElement('div');
        ReactDOM.render(<form></form>,div);
    });
    afterEach(cleanup);
    it("calls the onSubmit function",async()=>{
        const mockOnSubmit = jest.fn();
        const {container} = render(<form onSubmit={mockOnSubmit}></form>);
        const inputEl = container.querySelector('[className="input"]');
        
                
        await act(async ()=>{
            fireEvent.change(inputEl.value, {target:{value:"Chennai"}});
        });
        await act(async ()=>{
            fireEvent.click(getByText('Search'));
        });
         expect(mockOnSubmit).toHaveBeenCalled();
        
    })
});