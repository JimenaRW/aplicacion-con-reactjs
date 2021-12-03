import React from 'react';
import ContentRowTop from "./ContentRowTop/ContentRowTop";
import TableInDb from './ContentRowTop/TableInDb/TableInDb';
import Footer from "./Footer";
import TopBar from "./TopBar/TopBar";

function ContentWrapper() {
    return ( 
        <div id="content-wrapper" className="d-flex flex-column">
			
			<div id="content">

				<TopBar/>
				
				<ContentRowTop/>
                
				<TableInDb/>
			</div>

			<Footer/>
			
		</div>
    );
}

export default ContentWrapper;