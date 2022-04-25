import React from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import resumePDF from '../../img/resume.pdf';
import '../../App.css';

function Resume () {
    return(
        <div className='container'>
                        <h1 className='top-text text-center'>
                Resume
            </h1>
        <div className='row align-content-center'>
            <div className="col-12 resume">
            <Document file={resumePDF}>
                <Page pageNumber={1} />
            </Document>
            </div>
            </div>
            </div>
    );
}

export default Resume;